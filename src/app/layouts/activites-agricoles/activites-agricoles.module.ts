import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivitesAgricolesSortableDirective } from './liste-activites/activites-agricoles-sortable.directive';

@NgModule({
  declarations: [
    ActivitesAgricolesSortableDirective
  ],
  imports: [
    CommonModule,
    FormsModule,  // Ajout du FormsModule ici

  ],
  exports: [
  ]
})
export class ActivitesAgricolesModule { }
