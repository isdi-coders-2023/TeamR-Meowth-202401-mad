import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritecardComponent } from './favoritecard.component';
import { provideHttpClient } from '@angular/common/http';
import { MagicCard } from '../../core/model/model';
import { By } from '@angular/platform-browser';

describe('FavoritecardComponent', () => {
  let component: FavoritecardComponent;
  let fixture: ComponentFixture<FavoritecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritecardComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display a card', () => {
    const testCard: MagicCard = {
      name: 'testCard',
      imageUrl: 'http://www.test.com/',
      manaCost: '',
    } as MagicCard;
    component.card = testCard;
    fixture.detectChanges();
    const image = fixture.debugElement.query(By.css('li img')).nativeElement;
    expect(image.src).toEqual(testCard.imageUrl);
    expect(image.alt).toEqual(testCard.name);
  });
});
