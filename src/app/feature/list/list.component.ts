import { Component } from '@angular/core';
import { StoreService } from '../../core/store/store.service';
import { MagicCard } from '../../core/model/model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  cardData: MagicCard[] = [];
  constructor(private service: StoreService) {
    this.loadCard();
  }

  loadCard() {
    this.service.state$.subscribe((item) => (this.cardData = item));
  }
}
