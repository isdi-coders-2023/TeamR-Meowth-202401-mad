import { Injectable } from '@angular/core';
import { RepoService } from '../repo/repo.service';
import { BehaviorSubject } from 'rxjs';
import { MagicCard } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private state = new BehaviorSubject<MagicCard[]>([]);
  public state$ = this.state.asObservable();
  constructor(private repo: RepoService) {}

  loadData() {
    this.repo.getData().subscribe({
      next: (data) => this.state.next(data.cards),
      error: (dataError) => console.log('Es un error.' + dataError),
    });
  }
}
