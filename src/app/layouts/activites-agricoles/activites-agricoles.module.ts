import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListeActivitesComponent } from './liste-activites/liste-activites.component';
import { ActivitesAgricolesSortableDirective } from './liste-activites/activites-agricoles-sortable.directive';

@NgModule({
  declarations: [
    ListeActivitesComponent,
    ActivitesAgricolesSortableDirective
  ],
  imports: [
    CommonModule,
    FormsModule,  // Ajout du FormsModule ici
    
  ],
  exports: [
    ListeActivitesComponent
  ]
})
export class ActivitesAgricolesModule { }
