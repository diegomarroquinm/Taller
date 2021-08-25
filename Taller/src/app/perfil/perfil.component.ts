import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as globales from "../globales";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  editurl: string = `http://${globales.ip}:${globales.port}/usuario/actualizar/${localStorage.getItem("id")}`;
  deleteurl: string = `http://${globales.ip}:${globales.port}/usuario/eliminar/${localStorage.getItem("id")}`;
  nombreusuario = localStorage.getItem("user");
  ponerusuario = localStorage.getItem("user");
  ponercorreo = localStorage.getItem("correo");
  ponercontrasena = localStorage.getItem("contra");

  constructor(private router: Router, private httpClient: HttpClient) {
    
  }

  ngOnInit(): void {
  }

  modificarDatos() {
    var usuario = ((document.getElementById("usertxt") as HTMLInputElement).value);
    var correo = ((document.getElementById("emailtxt") as HTMLInputElement).value);
    var pass = ((document.getElementById("passwordtxt") as HTMLInputElement).value);
    var estado = 1;
    if (usuario != "" && pass != "" && correo != "") {
      let jsonData = { correo: correo, usuario: usuario, password: pass, id_estado: estado };
      this.httpClient.put(this.editurl, jsonData).toPromise().then((data: any) => {
        console.log(data);
        localStorage.setItem("user", data.user);
        localStorage.setItem("id", data.id);
        this.router.navigate(['inicio']);
      })
    }
  }

  eliminarCuenta() {
    this.httpClient.delete(this.editurl).toPromise().then((data: any) => {
      console.log(data);
      this.router.navigate(['home']);
    })
  }

  perfil() {
    this.router.navigate(['inicio/perfil']);
  }

  reservas() {
    this.router.navigate(['inicio']);
  }

  reservar() {
    this.router.navigate(['inicio/reservar']);
  }

  cerrarSesion() {
    this.router.navigate(['home']);
    localStorage.setItem("user", "");
    localStorage.setItem("id", "");
    localStorage.setItem("correo", "");
    localStorage.setItem("contra", "");
  }

}
