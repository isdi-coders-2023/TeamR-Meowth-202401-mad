import { Component } from '@angular/core';
import { PaginatorComponent } from '../paginator/paginator.component';
import { ListComponent } from '../list/list.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [PaginatorComponent, ListComponent, HeaderComponent, FilterComponent],
})
export class HomeComponent {}
