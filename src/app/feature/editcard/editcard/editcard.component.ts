import { Component } from '@angular/core';
import { CuFormComponent } from '../../cu-form/cu-form.component';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { HeaderComponent } from '../../../shared/header/header.component';
import { StoreService } from '../../../core/store/store.service';
import { MagicCard } from '../../../core/model/model';

@Component({
  selector: 'app-editcard',
  standalone: true,
  templateUrl: './editcard.component.html',
  styleUrl: './editcard.component.css',
  imports: [CuFormComponent, MenuComponent, HeaderComponent],
})
export default class EditcardComponent {
  card: MagicCard = {} as MagicCard;
  constructor(private store: StoreService) {
    this.store.shareEditCard().subscribe((data) => (this.card = data));
  }
}
