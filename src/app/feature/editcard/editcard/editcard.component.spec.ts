import { ComponentFixture, TestBed } from '@angular/core/testing';

import EditcardComponent from './editcard.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';

describe('EditcardComponent', () => {
  let component: EditcardComponent;
  let fixture: ComponentFixture<EditcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditcardComponent],
      providers: [provideHttpClient(), provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(EditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
