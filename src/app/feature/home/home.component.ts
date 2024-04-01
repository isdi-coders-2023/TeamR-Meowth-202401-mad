import { Component } from '@angular/core';
import { PaginatorComponent } from '../paginator/paginator.component';
import { ListComponent } from '../list/list.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PaginatorComponent,ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
