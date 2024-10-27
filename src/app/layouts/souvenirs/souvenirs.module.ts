import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeSouvenirsComponent } from './liste-souvenirs/liste-souvenirs.component';
import { LayoutsModule } from '../layouts.module';



@NgModule({
  declarations: [
    ListeSouvenirsComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule
  ]
})
export class SouvenirsModule { }
