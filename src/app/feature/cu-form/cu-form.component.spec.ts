import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuFormComponent } from './cu-form.component';
import { provideHttpClient } from '@angular/common/http';

describe('CuFormComponent', () => {
  let component: CuFormComponent;
  let fixture: ComponentFixture<CuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuFormComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(CuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
