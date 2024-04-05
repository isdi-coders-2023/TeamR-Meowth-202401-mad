import { ComponentFixture, TestBed } from '@angular/core/testing';

import ErrorComponent from './error.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render app-header and app-menu', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).not.toBeNull();
    expect(
      compiled.querySelector('app-header').querySelector('app-menu')
    ).not.toBeNull();
  });
  it('should display the error message and image', () => {
    const compiled = fixture.debugElement.nativeElement;
    const img = compiled.querySelector('section > img');
    expect(img.src).toContain('error-image.jpeg');
    expect(compiled.querySelector('h2').textContent).toContain('ERROR');
    expect(compiled.querySelector('p').textContent).toContain(
      "WE CAN'T FIND YOUR MANA"
    );
  });
});
