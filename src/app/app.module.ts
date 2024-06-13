import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroModule } from './meu-primeiro/meu-primeiro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeuPrimeiroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
