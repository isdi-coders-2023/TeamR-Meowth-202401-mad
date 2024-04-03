import { Component } from '@angular/core';
import { PaginatorComponent } from '../paginator/paginator.component';
import { ListComponent } from '../list/list.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FilterComponent } from '../filter/filter.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    PaginatorComponent,
    ListComponent,
    HeaderComponent,
    FilterComponent,
    RouterModule,
    FooterComponent,
    MenuComponent,
  ],
})
export default class HomeComponent {}
