import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { RepoService } from '../repo/repo.service';
import { MagicCard } from '../model/model';

describe('StoreService', () => {
  let service: StoreService;
  const repoServMock = {
    getData() {
      return of({ cards: [{ id: 1, imageUrl: 'url', name: 'Magic Card' }] });
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        StoreService,
        { provide: RepoService, useValue: repoServMock },
      ],
    });
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should update state with filtered cards ', (done) => {
    service.loadData();
    service.state$.subscribe((state) => {
      expect(state.length).toBe(1);
      expect(state[0].name).toEqual('Magic Card');
      done();
    });
  });
  it('should select a card and getSelectedCard observable should emit the selected card', (done) => {
    const card: MagicCard = {
      name: 'Magic Card',
      manaCost: '3',
      cmc: 3,
      colors: ['Red'],
      rarity: 'Common',
      setName: 'Set Name',
      text: 'Some text',
      artist: 'Artist Name',
      number: '1',
      imageUrl: 'http://mockeadahistorica.com',
      isFavorite: false,
      types: ['Type1'],
      flavor: 'Flavor text',
      id: '1',
    };
    service.selectCard(card);

    service.getSelectedCard().subscribe((selectedCard) => {
      expect(selectedCard).toEqual(card);
      done();
    });
  });
});
