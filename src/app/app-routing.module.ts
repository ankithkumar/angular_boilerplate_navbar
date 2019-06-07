import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  { path: '', redirectTo: 'inspiration', pathMatch: 'full' },
  { path: 'inspiration', component: InspirationComponent,
    children: [{
      path:  'nav',
      component:  NavbarComponent
    }]
  }, 
  {
    path: 'challenges', component: ChallengesComponent,
    children: [{
      path: 'nav',
      component: NavbarComponent
    }]
  },
  {
    path: 'advertise', component: AdvertiseComponent,
    children: [{
      path: 'nav',
      component: NavbarComponent
    }]
  },
  {
    path: 'submit', component: SubmitComponent,
    children: [{
      path: 'nav',
      component: NavbarComponent
    }]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}