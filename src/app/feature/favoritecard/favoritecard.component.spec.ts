import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritecardComponent } from './favoritecard.component';
import { provideHttpClient } from '@angular/common/http';

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
});
