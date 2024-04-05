import { Component, Input } from '@angular/core';
import { LocalRepoService } from '../../../core/local-repo/local-repo.service';
import { MagicCard } from '../../../core/model/model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homebutton',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './homebutton.component.html',
  styleUrl: './homebutton.component.css',
})
export class HomebuttonComponent {
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
