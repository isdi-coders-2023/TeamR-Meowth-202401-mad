import { TestBed } from '@angular/core/testing';

import { RepoService } from './repo.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CardList } from '../model/model';

describe('RepoService', () => {
  let service: RepoService;
  const httpClientMock = {
    get: jasmine.createSpy('get').and.returnValue(of()),
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RepoService,
        {
          provide: HttpClient,
          useValue: httpClientMock,
        },
      ],
    });
    service = TestBed.inject(RepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getData should return expected data on successful call', () => {
    const mockResponse: CardList = {
      cards: [
        {
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
        },
      ],
    };

    httpClientMock.get.and.returnValue(of(mockResponse));

    service.getData().subscribe({
      next: (data) => {
        expect(data).toEqual(mockResponse);
      },
    });

    expect(httpClientMock.get).toHaveBeenCalledWith(
      service.urlBase + '&page=1&colors=&types='
    );
  });
  it('getData should include color and type parameters', () => {
    service.getData(1, 'B', 'creature').subscribe();

    expect(httpClientMock.get).toHaveBeenCalledWith(
      service.urlBase + '&page=1&colors=B&types=creature'
    );
  });
});
