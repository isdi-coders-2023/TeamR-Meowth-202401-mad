import { Component, Input } from '@angular/core';
import { MagicCard } from '../../core/model/model';
import { Router, RouterModule } from '@angular/router';
import { StoreService } from '../../core/store/store.service';
import { HomebuttonComponent } from '../homebutton/homebutton/homebutton.component';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [RouterModule, HomebuttonComponent],
})
export class CardComponent {
  @Input() card!: MagicCard;
  constructor(private router: Router, private store: StoreService) {}
  sendDetails() {
    this.store.selectCard(this.card);
    this.router.navigate(['/details']);
  }
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendDetails();
    }
  }
}
