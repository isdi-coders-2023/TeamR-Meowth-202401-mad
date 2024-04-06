import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { GreetingComponent } from '../../feature/greeting/greeting.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [MenuComponent, GreetingComponent],
})
export class HeaderComponent {}
