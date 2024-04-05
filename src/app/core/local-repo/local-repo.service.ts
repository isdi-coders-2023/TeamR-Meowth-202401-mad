import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MagicCard } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalRepoService {
  urlFavorites = 'http://localhost:3000/cards';
  constructor(private http: HttpClient) {}

  getFavorites(): Observable<MagicCard[]> {
    return this.http.get<MagicCard[]>(this.urlFavorites);
  }
  addFavorites(fav: MagicCard) {
    this.http.post<MagicCard>(this.urlFavorites, fav).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
  deleteFavorites(id: string) {
    this.http.delete<MagicCard>(this.urlFavorites + '/' + id).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
}
