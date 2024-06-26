import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from './feature/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import DetailsComponent from './feature/details/details.component';
import { InitialFormComponent } from './feature/initial-form/initial-form.component';
import { StoreService } from './core/store/store.service';

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
    DetailsComponent,
    InitialFormComponent,
  ],
})
export class AppComponent {
  title = 'projectMeowth';
  isAuthenticated: boolean = false;

  constructor(private service: StoreService) {
    this.service.getIsAuthenticated().subscribe((isLogged) => {
      this.isAuthenticated = isLogged;
    });
  }
}
