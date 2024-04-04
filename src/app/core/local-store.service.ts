import { Injectable } from '@angular/core';
import { LocalRepoService } from './local-repo.service';
import { BehaviorSubject } from 'rxjs';
import { MagicCard } from './model/model';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  private state = new BehaviorSubject<MagicCard[]>([]);
  public state$ = this.state.asObservable();
  constructor(private repo: LocalRepoService) {
    this.loadFavorites();
  }

  loadFavorites() {
    this.repo.getFavorites().subscribe({
      next: (data) => this.state.next(data.cards),
      error: (dataError) => console.log('Es un error' + dataError),
    });
  }
}
