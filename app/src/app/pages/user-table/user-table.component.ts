import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {
  isLogginOn = false;

  users = [
    {id: '21', name: 'Brian', lastname: 'Barrera', status: 'Activo'},
    {id: '22', name: 'Alex', lastname: 'Barrera', status: 'Activo'},
    {id: '23', name: 'Marcos', lastname: 'Gomez', status: 'No Activo'},
    {id: '24', name: 'Ariel', lastname: 'Miranda', status: 'Activo'}
  ]
  
}
