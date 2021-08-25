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

  verurl: string = `http://${globales.ip}:${globales.port}/reserva/obtenerReserva?id=${localStorage.getItem("id")}`;
  datos = [{ num: 0, fecha: "", hora: "" }]

  constructor(private router: Router, private httpClient: HttpClient) {

  }


  ngOnInit(): void {

    this.httpClient.get(this.verurl).toPromise().then((data: any) => {
      this.datos.pop();
      let cont = 1;
      if (!data.error) {
        data.forEach((el: any) => {
          this.datos.push({
            num: cont,
            fecha: el.fecha.split("T")[0],
            hora: el.hora
          })
          cont++;
        });
      } else {
        alert("Ha ocurrido un error");
      }
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
