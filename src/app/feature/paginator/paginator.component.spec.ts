import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';
import { StoreService } from '../../core/store/store.service';
import { By } from '@angular/platform-browser';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  const mockSrv = jasmine.createSpyObj(StoreService, {
    loadData: [],
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatorComponent],
      providers: [{ provide: StoreService, useValue: mockSrv }],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadData', () => {
    spyOn(component, 'getPage').and.callThrough();
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click');
    expect(component.getPage).toHaveBeenCalled();
    expect(mockSrv.loadData).toHaveBeenCalled();
  });

  it('should update the value of currentPage when clicked', () => {
    fixture.debugElement.query(By.css('.page-up')).triggerEventHandler('click');
    expect(component.currentPage).toBe(2);
  });
  it('should update the value of currentPage when clicked', () => {
    fixture.debugElement
      .query(By.css('.page-down'))
      .triggerEventHandler('click');
    expect(component.currentPage).toBe(0);
  });
});
