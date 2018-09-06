import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { TableroHangmanComponent } from './components/tablero-hangman';
import { TecladoHangmanComponent } from './components/teclado-hangman';
import { ImagenHangmanComponent } from './components/imagen-hangman';

@NgModule({
  declarations: [
    AppComponent,
    TableroHangmanComponent, TecladoHangmanComponent, ImagenHangmanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
