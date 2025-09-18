import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { UserTableComponent } from "./component/user-table/user-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, UserTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
