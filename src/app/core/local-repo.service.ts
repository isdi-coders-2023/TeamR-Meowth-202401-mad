import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardList, MagicCard } from './model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalRepoService {
  urlFavorites = 'http://localhost:3000/cards';
  constructor(private http: HttpClient) {}
  getFavorites(): Observable<CardList> {
    return this.http.get<CardList>(this.urlFavorites);
  }
  addFavorites(fav: MagicCard) {
    this.http.post<MagicCard>(this.urlFavorites, fav);
  }
  deleteFavorites(id: string) {
    this.http.delete<MagicCard>(this.urlFavorites + '/' + id);
  }
}
