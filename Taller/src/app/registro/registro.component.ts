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
    if (usuario != "" && pass != "" && correo != "") {
      if (pass == pass2) {
        let jsonData = { correo: correo, usuario: usuario, password: pass, id_estado: estado };
        this.httpClient.post(this.registrourl, jsonData).toPromise().then((data: any) => {
          console.log(data);
          localStorage.setItem("user", data.user);
          localStorage.setItem("id", data.id);
          this.router.navigate(['inicio']);
        })
      }
    }
  }

}
