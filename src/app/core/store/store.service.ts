import { Injectable } from '@angular/core';
import { RepoService } from '../repo/repo.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { MagicCard } from '../model/model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private state = new BehaviorSubject<MagicCard[]>([]);
  public state$ = this.state.asObservable();
  private detailCard = new BehaviorSubject<MagicCard>({} as MagicCard);
  public detailCard$ = this.detailCard.asObservable();
  private editCard = new BehaviorSubject<MagicCard>({} as MagicCard);
  public editCard$ = this.editCard.asObservable();
  currentPage = 1;
  currentColor = '';
  currentType = '';
  private usernameForm = new BehaviorSubject<string>('Freak');
  public usernameForm$ = this.usernameForm.asObservable();
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  constructor(private repo: RepoService, private router: Router) {
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
      error: (dataError) => {
        this.router.navigate(['/error']);
        console.log(dataError);
      },
    });
  }

  selectCard(card: MagicCard) {
    this.detailCard.next(card);
  }

  getSelectedCard(): Observable<MagicCard> {
    return this.detailCard$;
  }

  getEditCard(card: MagicCard) {
    this.editCard.next(card);
  }

  shareEditCard(): Observable<MagicCard> {
    return this.editCard$;
  }

  getUsername(username: string) {
    this.usernameForm.next(username);
    this.isAuthenticated.next(true);
  }
  getIsAuthenticated(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
  changeUsername(username: string) {
    this.usernameForm.next(username);
    this.isAuthenticated.next(true);
  }
}
