import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialFormComponent } from './initial-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreService } from '../../core/store/store.service';

describe('InitialFormComponent', () => {
  let component: InitialFormComponent;
  let fixture: ComponentFixture<InitialFormComponent>;
  let boxForm: Partial<StoreService>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialFormComponent, ReactiveFormsModule],
      providers: [{ provide: StoreService, useValue: boxForm }],
    }).compileComponents();
    boxForm = { getUsername: () => null };

    fixture = TestBed.createComponent(InitialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a string in a box', () => {
    component.form.controls['email'].setValue('antonio@hotmail.com');
    component.form.controls['password'].setValue('antonio');
    component.form.controls['repeatPassword'].setValue('antonio');
    component.form.controls['username'].setValue('antonio');
    component.isLogged();
    expect(component.displayweb).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.invalid).toBeFalsy();
  });
});
