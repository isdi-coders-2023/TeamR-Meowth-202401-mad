import { Component } from '@angular/core';
import { StoreService } from '../../core/store/store.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  currentColor: string = '';
  currentType: string = '';
  constructor(private store: StoreService) {}
  changeColor(color: string) {
    this.store.loadData(this.store.currentPage, color);
    this.currentColor = color;
  }
  changeType(type: string) {
    this.store.loadData(this.store.currentPage, this.store.currentColor, type);
    this.currentType = type;
  }
  resetFilter() {
    this.currentColor = '';
    this.currentType = '';
    this.store.loadData(
      this.store.currentPage,
      this.currentColor,
      this.currentType
    );
  }
}
