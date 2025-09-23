import { Component } from '@angular/core';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { AuthService } from '../../services/auth.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ LoginModalComponent ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  private loginModal : any; 
  
  constructor(public auth : AuthService){}

  ngAfterViewInit():void{
    const modalEl = document.getElementById("ModalLogin")
    if(modalEl){
      this.loginModal = new bootstrap.Modal(modalEl);
    }
  }

  openLogin(){
    if(this.loginModal){
      this.loginModal.show();
    }
    else{
      console.log("Error al abrir el modal");
    }
  }

  closeLogin(data:boolean){
    if(this.loginModal){
      this.loginModal.hide();
    }
  }
}
