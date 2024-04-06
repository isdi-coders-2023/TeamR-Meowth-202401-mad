import { Component } from '@angular/core';
import { StoreService } from '../../core/store/store.service';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css',
})
export class GreetingComponent {
  user: string = 'Freak';
  isGreeting: boolean = false;
  constructor(private service: StoreService) {
    this.getLoggedIn();
  }
  getLoggedIn() {
    this.isGreeting = true;
    this.service.usernameForm$.subscribe((name) => {
      this.user = name;
    });
  }
}
