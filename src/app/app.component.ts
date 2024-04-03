import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from './feature/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
  ],
})
export class AppComponent {
  title = 'projectMeowth';
}
