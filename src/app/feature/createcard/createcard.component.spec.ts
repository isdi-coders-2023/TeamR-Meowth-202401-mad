import { ComponentFixture, TestBed } from '@angular/core/testing';

import CreatecardComponent from './createcard.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('CreatecardComponent', () => {
  let component: CreatecardComponent;
  let fixture: ComponentFixture<CreatecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatecardComponent],
      providers: [provideHttpClient(), provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
