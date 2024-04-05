import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritelistComponent } from './favoritelist.component';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';

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
  it('should render ul', () => {
    const list = fixture.debugElement.query(By.css('ul'));
    expect(list).toBeTruthy();
  });
});
