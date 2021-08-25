import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as globales from "../globales";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginurl: string = `http://${globales.ip}:${globales.port}/usuario/login`

  constructor(private router: Router, private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    var user = ((document.getElementById("usertxt") as HTMLInputElement).value);
    var pass = ((document.getElementById("passwordtxt") as HTMLInputElement).value);
    if (user != "" && pass != "") {
      let jsonData = { usuario: user, password: pass };
      this.httpClient.post(this.loginurl, jsonData).toPromise().then((data: any) => {
        if (!data.error) {
          console.log(data);
          localStorage.setItem("user", data.usuario);
          localStorage.setItem("id", data.id);
          localStorage.setItem("correo", data.correo);
          localStorage.setItem("contra", data.password);
          this.router.navigate(['inicio']);
        } else {
          
        }
      })
    }
  }

  home() {
    this.router.navigate(['home'])
  }

  registro() {
    this.router.navigate(['registro'])
  }

}
