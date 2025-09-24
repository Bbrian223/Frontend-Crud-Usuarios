import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss'
})
export class UserModalComponent {
@Input() idUser : number | null = null;
editar = false;

constructor(){}

SaveChanges(){
  //guardar los datos en el servicio
  this.closeView();
}

closeView(){
  this.editar = false;
}

}
