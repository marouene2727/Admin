import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeLieuxTouristiquesComponent } from './liste-lieux-touristiques/liste-lieux-touristiques.component';
import { LayoutsModule } from '../layouts.module';



@NgModule({
  declarations: [
    ListeLieuxTouristiquesComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule
  ]
})
export class LieuxTouristiquesModule { }
