import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SubmitComponent } from './submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InspirationComponent,
    ChallengesComponent,
    AdvertiseComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
