import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create render an image', () => {
    const image = fixture.debugElement.query(By.css('img'));
    expect(image).toBeTruthy();
  });
  it('should have the right dimensions', () => {
    const image = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(image.width).toBe(200);
  });
  it('should display the right image', () => {
    const image = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(image.src).toContain('magiclogo');
  });
  it('should have the right alt text', () => {
    const image = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(image.alt).toContain('Logo de Magic');
  });
});
