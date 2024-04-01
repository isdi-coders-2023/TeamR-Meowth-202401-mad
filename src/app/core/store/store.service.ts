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
  currentPage = 1;
  constructor(private repo: RepoService) {
    this.loadData();
  }

  loadData( page: number = this.currentPage) {

    this.repo.getData(page).subscribe({
      next: (data) => {this.state.next(data.cards);
      this.currentPage = page},
      error: (dataError) => console.log('Es un error.' + dataError),
    });
  }
}
