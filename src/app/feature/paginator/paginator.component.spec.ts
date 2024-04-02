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
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click');
    expect(mockSrv.loadData).toHaveBeenCalled();
  });
});
