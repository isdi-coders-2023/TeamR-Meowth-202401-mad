import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardList } from '../model/model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  urlBase = 'https://api.magicthegathering.io/v1/cards?pageSize=8';
  constructor(private http: HttpClient) {}
  getData(
    page: number = 1,
    color: string = '',
    types: string = ''
  ): Observable<CardList> {
    return this.http.get<CardList>(
      this.urlBase + '&page=' + page + '&colors=' + color + '&types=' + types
    );
  }
}
