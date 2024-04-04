import { TestBed } from '@angular/core/testing';

import { LocalRepoService } from './local-repo.service';

describe('LocalRepoService', () => {
  let service: LocalRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
