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
    var pass2 = ((document.getElementById("passwordtxt2") as HTMLInputElement).value);
    var estado = 1;
    if (usuario != "" && pass != "" && correo != "" && pass2 != "") {
      if (pass == pass2) {
        let jsonData = { correo: correo, usuario: usuario, password: pass, id_estado: estado };
        this.httpClient.put(this.editurl, jsonData).toPromise().then((data: any) => {
          if (!data.error) {
            localStorage.setItem("user", usuario);
            localStorage.setItem("correo", correo);
            localStorage.setItem("contra", pass)
            this.router.navigate(['inicio']);
          } else {
            alert("Ha ocurrido un error");
          }
        })
      } else {
        alert("Las contraseñas no coinciden");
      }
    } else {
      alert("Uno de los campos está vacío");
    }
  }

  eliminarCuenta() {
    this.httpClient.delete(this.deleteurl).toPromise().then((data: any) => {
      alert("Cuenta eliminada");
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
