import { TestBed } from '@angular/core/testing';

import { StudentCardSearchService } from './student-card-search.service';

describe('StudentCardSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentCardSearchService = TestBed.get(StudentCardSearchService);
    expect(service).toBeTruthy();
  });
});
