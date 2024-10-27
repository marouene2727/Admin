import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DefaultComponent } from './dashboards/default/default.component';
import { AdvancedtableComponent } from './dashboards/advancedtable/advancedtable.component';


const routes: Routes = [
  // { path: '', redirectTo: 'dashboard' },
  {
    path: "",
    component: DefaultComponent
  },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'users', component: AdvancedtableComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
