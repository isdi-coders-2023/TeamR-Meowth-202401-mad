import { Component, Input } from '@angular/core';
import { MagicCard } from '../../core/model/model';
import { LocalRepoService } from '../../core/local-repo.service';

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
    if (this.card.isFavorite === true) {
      this.rep.deleteFavorites(this.card.id);
    } else {
      this.rep.addFavorites(this.card);
    }
    this.card.isFavorite = !this.card.isFavorite;
  }
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendFavorite();
    }
  }
}
