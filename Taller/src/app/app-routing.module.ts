import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReservarComponent } from './reservar/reservar.component';
import { ReservasComponent } from './reservas/reservas.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'inicio/perfil',
    component: PerfilComponent
  },
  {
    path: 'inicio',
    component: ReservasComponent
  },
  {
    path: 'inicio/reservar',
    component: ReservarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
