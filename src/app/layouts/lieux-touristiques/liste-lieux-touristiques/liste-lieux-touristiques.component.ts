import { Component, OnInit } from '@angular/core';
import { LieuTouristique } from 'src/app/core/models/lieu-touristique.model';

@Component({
    selector: 'app-liste-lieux-touristiques',
    templateUrl: './liste-lieux-touristiques.component.html',
    styleUrls: ['./liste-lieux-touristiques.component.scss']
})
export class ListeLieuxTouristiquesComponent implements OnInit {
    lieuxTouristiques: LieuTouristique[] = [
        {
            id: 1,
            nom: "Plage Dorée",
            localisation: "Côte Sud",
            capaciteDAccueil: 2000
        },
        {
            id: 2,
            nom: "Montagne Verte",
            localisation: "Nord-Est",
            capaciteDAccueil: 1500
        }
    ];

    constructor() { }
    ngOnInit(): void { }
}
