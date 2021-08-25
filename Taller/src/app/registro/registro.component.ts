import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as globales from "../globales";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registrourl: string = `http://${globales.ip}:${globales.port}/usuario/registro`

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['home'])
  }

  registrar() {
    var usuario = ((document.getElementById("usertxt") as HTMLInputElement).value);
    var correo = ((document.getElementById("emailtxt") as HTMLInputElement).value);
    var pass = ((document.getElementById("passwordtxt") as HTMLInputElement).value);
    var pass2 = ((document.getElementById("passwordtxt2") as HTMLInputElement).value);
    var estado = 1;
    if (usuario != "" && pass != "" && correo != "" && pass2 != "") {
      if (pass == pass2) {
        let jsonData = { correo: correo, usuario: usuario, password: pass, id_estado: estado };
        this.httpClient.post(this.registrourl, jsonData).toPromise().then((data: any) => {
          if (!data.error) {
            this.router.navigate(['home']);
          } else {
            alert("Ha ocurrdo un error");
          }
        })
      } else {
        alert("Las contraseñas no coinciden, inténtelo nuevamente");
      }
    } else {
      alert("Por favor llenar todos los campos");
    }
  }

}
