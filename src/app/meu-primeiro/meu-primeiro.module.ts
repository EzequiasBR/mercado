import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuPrimeiroComponent } from './meu-primeiro.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    MeuPrimeiroComponent,
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    MeuPrimeiroComponent
  ]
})
export class MeuPrimeiroModule { }
