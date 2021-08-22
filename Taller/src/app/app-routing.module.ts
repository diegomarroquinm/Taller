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
    path: 'Taller/home',
    component: HomeComponent
  },
  {
    path: 'Taller/conocenos',
    component: QuienessomosComponent
  },
  {
    path: 'Taller/contacto',
    component: ContactanosComponent
  },
  {
    path: '',
    redirectTo: 'Taller/home',
    pathMatch: 'full'
  },
  {
    path: 'Taller/registro',
    component: RegistroComponent
  },
  {
    path: 'Taller/inicio',
    component: InicioComponent
  },
  {
    path: 'Taller/inicio/perfil',
    component: PerfilComponent
  },
  {
    path: 'Taller/inicio/mis-reservas',
    component: ReservasComponent
  },
  {
    path: 'Taller/inicio/reservar',
    component: ReservarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
