import { TestBed } from '@angular/core/testing';

import { LocalRepoService } from './local-repo.service';
import { provideHttpClient } from '@angular/common/http';

describe('LocalRepoService', () => {
  let service: LocalRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(LocalRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
