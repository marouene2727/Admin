import { Component, OnInit } from '@angular/core';
import { LieuCulte } from 'src/app/core/models/lieu-culte.model';

@Component({
    selector: 'app-liste-lieux-cultes',
    templateUrl: './liste-lieux-cultes.component.html',
    styleUrls: ['./liste-lieux-cultes.component.scss']
})
export class ListeLieuxCultesComponent implements OnInit {
    lieuxCultes: LieuCulte[] = [
        {
            id: 1,
            nom: "Mosquée Centrale",
            description: "Grande mosquée historique",
            capaciteDAccueil: 1000,
            localisation: "Centre-ville"
        },
        {
            id: 2,
            nom: "Église Saint-Pierre",
            description: "Église du 19ème siècle",
            capaciteDAccueil: 500,
            localisation: "Quartier Nord"
        }
    ];

    constructor() { }
    ngOnInit(): void { }
}
