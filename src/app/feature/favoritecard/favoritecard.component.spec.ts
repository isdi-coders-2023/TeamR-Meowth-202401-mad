import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritecardComponent } from './favoritecard.component';

describe('FavoritecardComponent', () => {
  let component: FavoritecardComponent;
  let fixture: ComponentFixture<FavoritecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritecardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
