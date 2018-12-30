import { TestBed } from '@angular/core/testing';

import { PostResolverService } from './post-resolver.service';

describe('PostResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostResolverService = TestBed.get(PostResolverService);
    expect(service).toBeTruthy();
  });
});
