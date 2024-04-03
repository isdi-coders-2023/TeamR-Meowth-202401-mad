import { Injectable } from '@angular/core';
import { RepoService } from '../repo/repo.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { MagicCard } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private state = new BehaviorSubject<MagicCard[]>([]);
  public state$ = this.state.asObservable();
  private detailCard = new BehaviorSubject<MagicCard>({} as MagicCard);
  public detailCard$ = this.detailCard.asObservable();
  currentPage = 1;
  currentColor = '';
  currentType = '';
  private usernameForm = new BehaviorSubject<string>('');
  public usernameForm$ = this.state.asObservable();
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  constructor(private repo: RepoService) {
    this.loadData();
  }

  loadData(
    page: number = this.currentPage,
    color: string = this.currentColor,
    type: string = this.currentType
  ) {
    this.repo.getData(page, color, type).subscribe({
      next: (data) => {
        this.state.next(data.cards.filter((data) => data.imageUrl));
        this.currentPage = page;
        this.currentColor = color;
        this.currentType = type;
      },
      error: (dataError) => console.log('Es un error.' + dataError),
    });
  }

  selectCard(card: MagicCard) {
    this.detailCard.next(card);
  }

  getSelectedCard(): Observable<MagicCard> {
    return this.detailCard$;
  }

  getUsername(username: string) {
    this.usernameForm.next(username);
    this.isAuthenticated.next(true);
  }
  getisAuthenticated(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
}
