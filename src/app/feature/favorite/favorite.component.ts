import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { FavoritelistComponent } from '../favoritelist/favoritelist.component';

@Component({
  selector: 'app-favorite',
  standalone: true,
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
  imports: [HeaderComponent, MenuComponent, FavoritelistComponent],
})
export default class FavoriteComponent {}
