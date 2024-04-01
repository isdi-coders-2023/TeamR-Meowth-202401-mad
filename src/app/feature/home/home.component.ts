import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [ListComponent],
})
export class HomeComponent {}
