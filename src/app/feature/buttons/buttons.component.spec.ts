import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';
import { provideHttpClient } from '@angular/common/http';
import { LocalRepoService } from '../../core/local-repo/local-repo.service';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;
  const mockSrv = jasmine.createSpyObj(LocalRepoService, {
    addFavorites: [],
    deleteFavorites: [],
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsComponent],
      providers: [
        provideHttpClient(),
        {
          provide: LocalRepoService,
          useValue: mockSrv,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle card isFavorite state on sendFavorite call', () => {
    component.card = {
      name: 'paco',
      manaCost: '1',
      cmc: 2,
      colors: ['3'],
      rarity: '4',
      setName: '4',
      text: '5',
      artist: '6',
      number: '7',
      imageUrl: '8',
      isFavorite: false,
      types: ['10'],
      flavor: '11',
      id: '33',
    };
    component.sendFavorite();
    expect(component.card.isFavorite).toBeTrue();
    expect(mockSrv.addFavorites).toHaveBeenCalledWith(component.card);

    component.sendFavorite();
    expect(component.card.isFavorite).toBeFalse();
    expect(mockSrv.deleteFavorites).toHaveBeenCalledWith(component.card.id);
  });
  it('should correctly initialize @Input properties', () => {
    const testCard = {
      name: 'paco',
      manaCost: '1',
      cmc: 2,
      colors: ['3'],
      rarity: '4',
      setName: '4',
      text: '5',
      artist: '6',
      number: '7',
      imageUrl: '8',
      isFavorite: false,
      types: ['10'],
      flavor: '11',
      id: '33',
    };
    component.card = testCard;
    fixture.detectChanges();

    expect(component.card).toEqual(testCard);
  });
});
