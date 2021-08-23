import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
