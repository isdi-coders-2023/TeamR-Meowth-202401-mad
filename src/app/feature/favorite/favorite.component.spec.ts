import { ComponentFixture, TestBed } from '@angular/core/testing';

import FavoriteComponent from './favorite.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('FavoriteComponent', () => {
  let component: FavoriteComponent;
  let fixture: ComponentFixture<FavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteComponent],
      providers: [provideHttpClient(), provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render header and menu components', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).not.toBeNull();
    expect(compiled.querySelector('app-menu')).not.toBeNull();
  });
});
