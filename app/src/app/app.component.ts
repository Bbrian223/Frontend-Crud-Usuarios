import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserTableComponent } from "./pages/user-table/user-table.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserTableComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
