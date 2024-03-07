import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { HolaComponent } from './hola/hola.component';
import { HolaDeNuevoComponent } from './hola-de-nuevo/hola-de-nuevo.component';
import { CronometroComponent } from './cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuInicialComponent,
    HolaComponent,
    HolaDeNuevoComponent,
    CronometroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
