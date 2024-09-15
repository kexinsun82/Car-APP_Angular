import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';
import { CarFormComponent } from './car-form/car-form.component';
import { FormsModule } from '@angular/forms';
import { CarsTableComponent } from './cars-table/cars-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    CarFormComponent,
    CarsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
