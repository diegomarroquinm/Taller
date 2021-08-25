import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as globales from "../globales";

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  reservarurl: string = `http://${globales.ip}:${globales.port}/usuario/nuevaReserva`

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  hacerReserva() {
    var fecha = ((document.getElementById("datetxt") as HTMLInputElement).value);
    var horas = ((document.getElementById("timetxt") as HTMLInputElement).value);
    var hora = horas + ":00";
    console.log(fecha);
    console.log(hora);
    if (fecha != "" && hora != "") {
      let jsonData = { id: localStorage.getItem("id"), fecha: fecha, hora: hora };
      this.httpClient.post(this.reservarurl, jsonData).toPromise().then((data: any) => {
        console.log(data);
        this.router.navigate(['inicio']);
      })
    }
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
