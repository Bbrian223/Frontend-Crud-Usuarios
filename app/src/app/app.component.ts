import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserTableComponent } from "./pages/user-table/user-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
