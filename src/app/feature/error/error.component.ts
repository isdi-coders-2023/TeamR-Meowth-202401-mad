import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
  imports: [FooterComponent, MenuComponent, HeaderComponent, RouterModule],
})
export default class ErrorComponent {}
