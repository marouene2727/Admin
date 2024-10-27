import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeLieuxCultesComponent } from './liste-lieux-cultes/liste-lieux-cultes.component';
import { LayoutsModule } from '../layouts.module';



@NgModule({
  declarations: [
    ListeLieuxCultesComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule
  ]
})
export class LieuxCultesModule { }
