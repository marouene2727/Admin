import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layouts/layout.component';
import { ListeActivitesComponent } from './layouts/activites-agricoles/liste-activites/liste-activites.component';
import { ListeFormateursComponent } from './layouts/formateurs/liste-formateurs/liste-formateurs.component';
import { ListeSouvenirsComponent } from './layouts/souvenirs/liste-souvenirs/liste-souvenirs.component';
import { ListeLieuxTouristiquesComponent } from './layouts/lieux-touristiques/liste-lieux-touristiques/liste-lieux-touristiques.component';
import { ListeLieuxCultesComponent } from './layouts/lieux-cultes/liste-lieux-cultes/liste-lieux-cultes.component';



const routes: Routes = [

  // tslint:disable-next-line: max-line-length
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },

  { path: 'activites-agricoles',
    children: [
      {
        path: 'liste',
        component: ListeActivitesComponent
      }
    ]
  },

  {
    path: 'formateurs',
    children: [
      {
        path: 'liste',
        component: ListeFormateursComponent
      }
    ]
  },

  {
    path: 'lieux-cultes',
    children: [
      {
        path: 'liste',
        component: ListeLieuxCultesComponent
      }
    ]
  },
  {
    path: 'lieux-touristiques',
    children: [
      {
        path: 'liste',
        component: ListeLieuxTouristiquesComponent
      }
    ]
  },
  {
    path: 'souvenirs',
    children: [
      {
        path: 'liste',
        component: ListeSouvenirsComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
