import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeFormateursComponent } from './liste-formateurs/liste-formateurs.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutsModule } from '../layouts.module';

@NgModule({
    declarations: [ListeFormateursComponent],
    imports: [
        CommonModule,
        SharedModule,  // Import du module partagé qui contient topbar, sidebar et footer
        LayoutsModule,
    ],
    exports: [ListeFormateursComponent]
})
export class FormateursModule { }
