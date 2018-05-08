import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanjoseComponent } from './sanjose/sanjose.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    PagenotfoundComponent,
    BurbankComponent,
    ChicagoComponent,
    DallasComponent,
    DcComponent,
    SanjoseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
