import { Component, OnInit } from '@angular/core';
import { ActiviteAgricole } from 'src/app/core/models/activite-agricole.model';

@Component({
    selector: 'app-liste-activites',
    templateUrl: './liste-activites.component.html',
    styleUrls: ['./liste-activites.component.scss']
})
export class ListeActivitesComponent implements OnInit {
    activites: ActiviteAgricole[] = [
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
        }
    ];

    constructor() { }

    ngOnInit(): void { }
}
