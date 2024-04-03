import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StoreService } from '../../core/store/store.service';

@Component({
  selector: 'app-initial-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './initial-form.component.html',
  styleUrl: './initial-form.component.css',
})
export class InitialFormComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    repeatpassword: new FormControl(),
    username: new FormControl(),
  });

  displayWeb: boolean = false;
  constructor(private store: StoreService) {}

  isLogged() {
    this.store.getUsername(this.form.value.username);
    this.displayWeb = true;
  }
}
