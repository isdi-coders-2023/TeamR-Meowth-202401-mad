import { Component, Input } from '@angular/core';
import { MagicCard } from '../../core/model/model';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-favoritecard',
  standalone: true,
  templateUrl: './favoritecard.component.html',
  styleUrl: './favoritecard.component.css',
  imports: [ButtonsComponent],
})
export class FavoritecardComponent {
  @Input() card!: MagicCard;
}
