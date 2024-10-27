import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/core/models/formateur.model';

@Component({
    selector: 'app-liste-formateurs',
    templateUrl: './liste-formateurs.component.html',
    styleUrls: ['./liste-formateurs.component.scss']
})
export class ListeFormateursComponent implements OnInit {
    formateurs: Formateur[] = [
        {
            id: 1,
            nom: "Jean Dupont",
            biographieFormateur: "Expert en agriculture biologique",
            nbrAnneesExperience: 15,
            specialiteFormateur: "Agriculture Bio",
            role: "Formateur Principal"
        },
        {
            id: 2,
            nom: "Marie Martin",
            biographieFormateur: "Spécialiste en élevage",
            nbrAnneesExperience: 10,
            specialiteFormateur: "Élevage",
            role: "Formateur Senior"
        }
    ];

    constructor() { }

    ngOnInit(): void { }
}
