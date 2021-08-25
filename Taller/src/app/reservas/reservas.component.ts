import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as globales from "../globales";

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  verurl: string = `http://${globales.ip}:${globales.port}/usuario/nuevaReserva?id=${localStorage.getItem("id")}`;
  tablar:Array<any> = new Array<any>();
  
  constructor(private router: Router, private httpClient: HttpClient) {

  }


  ngOnInit(): void {

    this.httpClient.get(this.verurl).toPromise().then((data: any) => {
      console.log(data);
      this.tablar = data;
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
