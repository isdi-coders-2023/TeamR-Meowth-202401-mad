import { Component, Input } from '@angular/core';
import { MagicCard } from '../../core/model/model';
import { LocalRepoService } from '../../core/local-repo/local-repo.service';
import { StoreService } from '../../core/store/store.service';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
  constructor(private rep: LocalRepoService, private store: StoreService) {}
  @Input() card!: MagicCard;
  sendFavorite() {
    this.card.isFavorite = !this.card.isFavorite;
    if (!this.card.isFavorite) {
      this.rep.deleteFavorites(this.card.id);
    } else {
      this.rep.addFavorites(this.card);
    }
  }
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendFavorite();
    }
  }
  deleteCard() {
    this.rep.deleteFavorites(this.card.id);
  }
  keydownDelete(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.deleteCard();
    }
  }
  sendEditCard() {
    this.store.getEditCard(this.card);
  }
  keydownEdit(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendEditCard();
    }
  }
}
