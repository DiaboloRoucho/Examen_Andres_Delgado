import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { HolaComponent } from './hola/hola.component';
import { HolaDeNuevoComponent } from './hola-de-nuevo/hola-de-nuevo.component';
import { CronometroComponent } from './cronometro/cronometro.component';

const routes: Routes = [
  {path: '', component: MenuInicialComponent},
  {path: 'hola', component: HolaComponent},
  {path: 'menu', component: MenuInicialComponent},
  {path: 'menu/hola', component: HolaDeNuevoComponent},
  {path: 'crono', component: CronometroComponent},
  {path: 'menu/crono', component: CronometroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
