import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LocalRepoService } from '../../core/local-repo/local-repo.service';
import { MagicCard } from '../../core/model/model';

@Component({
  selector: 'app-cu-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './cu-form.component.html',
  styleUrl: './cu-form.component.css'
})
export class CuFormComponent {
  cuForm: FormGroup = new FormGroup({
    name: new FormControl(),
    manaCost: new FormControl(),
    cmc: new FormControl(),
    colors: new FormControl(),
    rarity: new FormControl(),
    setName: new FormControl(),
    text: new FormControl(),
    artist: new FormControl(),
    imageUrl: new FormControl(),
    types: new FormControl(),
    flavor: new FormControl(),
  })
  constructor(private local: LocalRepoService) {}

  sendNewCard(){
    const randomId = crypto.randomUUID()
    const newCard: MagicCard = {
    name: this.cuForm.value.name,
    manaCost: this.cuForm.value.manaCost,
    cmc: this.cuForm.value.cmc,
    colors: this.cuForm.value.colors,
    rarity: this.cuForm.value.rarity,
    setName: this.cuForm.value.setName,
    text: this.cuForm.value.text,
    artist: this.cuForm.value.artist,
    imageUrl: '../../../assets/img/cardtemplate.png',
    types: this.cuForm.value.types,
    flavor: this.cuForm.value.flavor,
    number: randomId.toString(),
    isFavorite: true,
    id: randomId,
    };
    this.local.addNewCard(newCard)
  }
}
