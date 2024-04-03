import { Component } from '@angular/core';
import { StoreService } from '../../core/store/store.service';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  currentPage = 1;
  constructor(private store: StoreService) {}
  getPage(page: number) {
    this.currentPage += page;
    this.store.loadData(this.currentPage);
  }
}
