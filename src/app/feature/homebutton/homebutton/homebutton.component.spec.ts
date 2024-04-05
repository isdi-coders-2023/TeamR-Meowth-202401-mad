import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebuttonComponent } from './homebutton.component';
import { provideHttpClient } from '@angular/common/http';

describe('HomebuttonComponent', () => {
  let component: HomebuttonComponent;
  let fixture: ComponentFixture<HomebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomebuttonComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
