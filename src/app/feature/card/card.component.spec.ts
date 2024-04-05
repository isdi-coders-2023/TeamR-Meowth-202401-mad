import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { MagicCard } from '../../core/model/model';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
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
