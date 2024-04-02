import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';
import { provideHttpClient } from '@angular/common/http';

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
