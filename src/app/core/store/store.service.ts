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
  currentColor = '';
  currentType = '';
  constructor(private repo: RepoService) {
    this.loadData();
  }

  loadData( page: number = this.currentPage, color: string = this.currentColor, type: string = this.currentType) {

    this.repo.getData(page, color, type).subscribe({
      next: (data) => {this.state.next(data.cards.filter((data) => data.imageUrl));
      this.currentPage = page
      this.currentColor = color
      this.currentType = type},
      error: (dataError) => console.log('Es un error.' + dataError),
    });
  }
}
