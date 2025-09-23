import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-modal-delete',
  standalone: true,
  imports: [],
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.scss'
})
export class ModalDeleteComponent {
@Input() idUser : number | null = null;

constructor(){}

}
