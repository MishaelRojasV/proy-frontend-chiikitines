import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import ProductoListComponent from "./productos/producto-list/producto-list.component";
import ProductoCreateComponent from "./productos/producto-create/producto-create.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-angular-chikitines';
}
