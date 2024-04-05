import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritelistComponent } from './favoritelist.component';
import { provideHttpClient } from '@angular/common/http';

describe('FavoritelistComponent', () => {
  let component: FavoritelistComponent;
  let fixture: ComponentFixture<FavoritelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritelistComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
