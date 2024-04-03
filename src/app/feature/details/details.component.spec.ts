import { ComponentFixture, TestBed } from '@angular/core/testing';
import DetailsComponent from './details.component';
import { MagicCard } from '../../core/model/model';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponent],

      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display card info correctly', () => {
    const testCard = {
      name: 'testName',
    } as MagicCard;
    component.card = testCard;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(element.textContent).toContain('testName');
    expect(component).toBeTruthy();
  });
});
