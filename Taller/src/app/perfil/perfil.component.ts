import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  modificarDatos() {

  }

  eliminarCuenta() {

  }

  inicio() {
    this.router.navigate(['.inicio']);
  }

  perfil() {
    this.router.navigate(['.inicio/perfil']);
  }

  reservas() {
    this.router.navigate(['.inicio/mis-reservas']);
  }

  reservar() {
    this.router.navigate(['.inicio/reservar']);
  }

  cerrarSesion() {
    this.router.navigate(['.home']);
    localStorage.setItem("user", "");
    localStorage.setItem("id", "");
  }

}
