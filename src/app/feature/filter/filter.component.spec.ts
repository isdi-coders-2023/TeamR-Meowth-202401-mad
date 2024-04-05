import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { StoreService } from '../../core/store/store.service';
import { By } from '@angular/platform-browser';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  const mockSrv = jasmine.createSpyObj(StoreService, {
    loadData: [],
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterComponent],
      providers: [{ provide: StoreService, useValue: mockSrv }],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadData', () => {
    fixture.debugElement.query(By.css('.green')).triggerEventHandler('click');
    fixture.debugElement
      .query(By.css('.artifact'))
      .triggerEventHandler('click');
    fixture.debugElement.query(By.css('.red')).triggerEventHandler('click');
    fixture.debugElement.query(By.css('.blue')).triggerEventHandler('click');
    fixture.debugElement.query(By.css('.white')).triggerEventHandler('click');
    fixture.debugElement.query(By.css('.black')).triggerEventHandler('click');
    fixture.debugElement.query(By.css('.reset')).triggerEventHandler('click');
    expect(mockSrv.loadData).toHaveBeenCalled();
  });
});
