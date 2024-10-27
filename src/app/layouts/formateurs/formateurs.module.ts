import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeFormateursComponent } from './liste-formateurs/liste-formateurs.component';
import { LayoutsModule } from '../layouts.module';

@NgModule({
    declarations: [ListeFormateursComponent],
    imports: [
        CommonModule,
        LayoutsModule,
    ],
    exports: [ListeFormateursComponent]
})
export class FormateursModule { }
