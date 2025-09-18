import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  

  constructor(){}

  onLogin(){
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    if(username == "Admin" && password == "Adminpass"){
      console.log("Incio de sesion realizado correctamente")
      //modal.hide();
    }
    else{
      console.log("Error al ingresar la contra")
    }
  }
}
