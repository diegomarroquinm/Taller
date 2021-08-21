import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReservarComponent } from './reservar/reservar.component';
import { ReservasComponent } from './reservas/reservas.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'conocenos',
    component: QuienessomosComponent
  },
  {
    path: 'contacto',
    component: ContactanosComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'inicio/perfil',
    component: PerfilComponent
  },
  {
    path: 'inicio/mis-reservas',
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
