import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.css']
})
export class QuienessomosComponent implements OnInit {

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
    this.router.navigate(['.conocenos'])
  }

  contacto() {
    this.router.navigate(['.conocenos'])
  }

  home() {
    this.router.navigate(['.home'])
  }

  registro() {
    this.router.navigate(['.registro'])
  }

}
