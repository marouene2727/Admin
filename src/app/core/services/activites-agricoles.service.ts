import { SortDirection } from './../../layouts/activites-agricoles/liste-activites/activites-agricoles-sortable.directive';
import { Injectable, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { ActiviteAgricole } from 'src/app/core/models/activite-agricole.model';




const ACTIVITES_DATA: ActiviteAgricole[] = [
  {
      id: 1,
      nom: "Culture de Tomates",
      duree: "3 mois",
      prix: 150.00,
      localisation: "Ferme du Sud",
      nbrParticipants: 15,
      description: "Apprentissage de la culture de tomates bio"
  },
  {
      id: 2,
      nom: "Élevage de Volailles",
      duree: "2 mois",
      prix: 200.00,
      localisation: "Ferme de l'Est",
      nbrParticipants: 10,
      description: "Formation complète sur l'élevage de volailles"
  },
  {
      id: 3,
      nom: "Culture de Maïs",
      duree: "4 mois",
      prix: 180.00,
      localisation: "Ferme du Nord",
      nbrParticipants: 20,
      description: "Techniques modernes de culture du maïs"
  }
];



interface SearchResult {
    activites: ActiviteAgricole[];
    total: number;
}

interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: string;
    sortDirection: SortDirection;
    startIndex: number;
    endIndex: number;
    totalRecords: number;
}

@Injectable({
    providedIn: 'root'
})
export class ActivitesAgricolesService {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _search$ = new Subject<void>();
    private _activites$ = new BehaviorSubject<ActiviteAgricole[]>([]);
    private _total$ = new BehaviorSubject<number>(0);

    private _state: State = {
        page: 1,
        pageSize: 10,
        searchTerm: '',
        sortColumn: '',
        sortDirection: '',
        startIndex: 0,
        endIndex: 9,
        totalRecords: 0
    };

    constructor(private pipe: DecimalPipe) {
        this._search$.pipe(
            tap(() => this._loading$.next(true)),
            debounceTime(200),
            switchMap(() => this._search()),
            delay(200),
            tap(() => this._loading$.next(false))
        ).subscribe(result => {
            this._activites$.next(result.activites);
            this._total$.next(result.total);
        });
        this._search$.next();
    }

    get activites$() { return this._activites$.asObservable(); }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    get startIndex() { return this._state.startIndex; }
    get endIndex() { return this._state.endIndex; }
    get totalRecords() { return this._state.totalRecords; }

    set page(page: number) { this._set({ page }); }
    set pageSize(pageSize: number) { this._set({ pageSize }); }
    set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
    set sortColumn(sortColumn: string) { this._set({ sortColumn }); }
    set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

    private _set(patch: Partial<State>) {
        Object.assign(this._state, patch);
        this._search$.next();
    }

    private _search(): Observable<SearchResult> {
      const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
      
      // Retourne les données statiques
      return of({
          activites: ACTIVITES_DATA,
          total: ACTIVITES_DATA.length
      });
  }
  
}
