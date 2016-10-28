import { NgModule }      from '@angular/core'; //necesario para tener @NgModule
import { BrowserModule } from '@angular/platform-browser'; //necesario para.. BrowserModule

import { AppComponent } from './app.component'; //importamos el componente creado por nosotros (app.component.ts en app/)

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]

})

export class AppModule { }