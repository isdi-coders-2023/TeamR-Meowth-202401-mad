import { Component } from '@angular/core';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PaginatorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
