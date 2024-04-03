import { Component } from '@angular/core';
import { StoreService } from '../../core/store/store.service';
import { MagicCard } from '../../core/model/model';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MenuComponent } from '../../shared/menu/menu.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, MenuComponent ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export default class DetailsComponent {
  card : MagicCard = {} as MagicCard;
  constructor( private store: StoreService) {
    this.store.getSelectedCard().subscribe((card) => (this.card = card));
  }
}
