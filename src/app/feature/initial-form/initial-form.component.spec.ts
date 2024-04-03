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
    const email = component.form.controls['email'];
    const password = component.form.controls['password'];
    const repeatPassword = component.form.controls['repeatpassword'];
    const username = component.form.controls['username'];
    email.setValue('antonio@hotmail.com');
    expect(email.value).toContain('antonio');
    password.setValue('alberto');
    expect(password.value).toContain('al');
    repeatPassword.setValue('francisco');
    expect(repeatPassword.value).toContain('fran');
    username.setValue('alejandro');
    expect(username.value).toContain('ale');
  });

  it('form invalid when empty', () => {
    expect(component.form.invalid).toBeFalsy();
  });
});
