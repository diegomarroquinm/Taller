import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    localStorage.setItem("usuario", "");
    localStorage.setItem("id", "");
  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    var user = ((document.getElementById("usertxt") as HTMLInputElement).value); 
    var pass = ((document.getElementById("passwordtxt") as HTMLInputElement).value);
    console.log("El usuario es: " + user);
    console.log("La contraseña es: " + pass);
  }

}
