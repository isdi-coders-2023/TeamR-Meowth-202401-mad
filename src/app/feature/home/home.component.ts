import { Component } from '@angular/core';
import { PaginatorComponent } from '../paginator/paginator.component';
import { ListComponent } from '../list/list.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [PaginatorComponent, ListComponent, HeaderComponent],
})
export class HomeComponent {}
