import { Component } from '@angular/core';
import { CuFormComponent } from '../../cu-form/cu-form.component';
import { MenuComponent } from '../../../shared/menu/menu.component';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-editcard',
  standalone: true,
  templateUrl: './editcard.component.html',
  styleUrl: './editcard.component.css',
  imports: [CuFormComponent, MenuComponent, HeaderComponent],
})
export default class EditcardComponent {}
