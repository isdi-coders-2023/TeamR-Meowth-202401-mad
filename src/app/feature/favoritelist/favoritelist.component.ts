import { Component } from '@angular/core';
import { LocalStoreService } from '../../core/local-store/local-store.service';
import { MagicCard } from '../../core/model/model';
import { FavoritecardComponent } from '../favoritecard/favoritecard.component';

@Component({
  selector: 'app-favoritelist',
  standalone: true,
  templateUrl: './favoritelist.component.html',
  styleUrl: './favoritelist.component.css',
  imports: [FavoritecardComponent],
})
export class FavoritelistComponent {
  favCards: MagicCard[] = [];
  constructor(private serv: LocalStoreService) {
    this.loadCards();
  }

  loadCards() {
    this.serv.state$.subscribe((item) => (this.favCards = item));
  }
}
