import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotFoundComponent } from "./pages/not-found/not-found.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce';
}
