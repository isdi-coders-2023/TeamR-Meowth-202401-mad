import { Component, Input } from '@angular/core';
import { MagicCard } from '../../core/model/model';
import { LocalRepoService } from '../../core/local-repo/local-repo.service';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
  constructor(private rep: LocalRepoService) {}
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
}
