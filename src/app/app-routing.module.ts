import { AlphaComponent } from './alpha/alpha.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'alpha',component: AlphaComponent },
  { path: 'burbank',component: BurbankComponent },
  { path: 'chicago',component: ChicagoComponent },
  { path: 'dallas',component: DallasComponent },
  { path: 'dc',component: DcComponent },
  { path: 'sanjose',component: SanjoseComponent },

  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
