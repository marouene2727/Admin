import { Component, OnInit } from '@angular/core';
import { Souvenir } from 'src/app/core/models/souvenir.model';

@Component({
    selector: 'app-liste-souvenirs',
    templateUrl: './liste-souvenirs.component.html',
    styleUrls: ['./liste-souvenirs.component.scss']
})
export class ListeSouvenirsComponent implements OnInit {
    souvenirs: Souvenir[] = [
        {
            id: 1,
            nom: "Statuette traditionnelle",
            description: "Artisanat local",
            stock: 50,
            prix: 25.99
        },
        {
            id: 2,
            nom: "Panier tressé",
            description: "Fait main",
            stock: 30,
            prix: 15.50
        }
    ];

    constructor() { }
    ngOnInit(): void { }
}
