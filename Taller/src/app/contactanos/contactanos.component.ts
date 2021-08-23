import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  iniciarSesion() {
    var user = ((document.getElementById("usertxt") as HTMLInputElement).value);
    var pass = ((document.getElementById("passwordtxt") as HTMLInputElement).value);
    console.log("El usuario es: " + user);
    console.log("La contraseña es: " + pass);
  }

  conocenos() {
    this.router.navigate(['conocenos'])
  }

  contacto() {
    this.router.navigate(['contacto'])
  }

  home() {
    this.router.navigate(['home'])
  }

  registro() {
    this.router.navigate(['registro'])
  }

}
