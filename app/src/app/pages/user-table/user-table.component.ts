import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserModalComponent } from './user-modal/user-modal.component';
import { ModalDeleteComponent } from "./modal-delete/modal-delete.component"; 

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [UserModalComponent, ModalDeleteComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {
  numberId : number | null = null;
  
  users = [
    {id: 21, name: 'Brian', lastname: 'Barrera', status: 'Activo'},
    {id: 22, name: 'Alex', lastname: 'Barrera', status: 'Activo'},
    {id: 23, name: 'Marcos', lastname: 'Gomez', status: 'No Activo'},
    {id: 24, name: 'Ariel', lastname: 'Miranda', status: 'Activo'}
  ]
  
  constructor(public auth : AuthService){
  }

  userSelected(num : number) : void{
    this.numberId = num;
  }

}
