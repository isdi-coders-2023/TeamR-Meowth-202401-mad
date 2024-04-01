import { Component, Input } from '@angular/core';
import { MagicCard } from '../../core/model/model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() card!: MagicCard;
}
