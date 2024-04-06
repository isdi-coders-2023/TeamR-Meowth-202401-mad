import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponent } from './greeting.component';
import { provideHttpClient } from '@angular/common/http';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set isGreeting to true on component initialization', () => {
    expect(component.isGreeting).toBeTrue();
  });
});
