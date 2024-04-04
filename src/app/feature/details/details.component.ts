import { Component } from '@angular/core';
import { StoreService } from '../../core/store/store.service';
import { MagicCard } from '../../core/model/model';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PaginatorComponent,
  ],
})
export default class DetailsComponent {
  card: MagicCard = {} as MagicCard;
  constructor(private store: StoreService) {
    this.store.getSelectedCard().subscribe((card) => (this.card = card));
  }
}
