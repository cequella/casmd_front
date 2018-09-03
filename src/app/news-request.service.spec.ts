import { TestBed, inject } from '@angular/core/testing';

import { NewsRequestService } from './news-request.service';

describe('NewsRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsRequestService]
    });
  });

  it('should be created', inject([NewsRequestService], (service: NewsRequestService) => {
    expect(service).toBeTruthy();
  }));
});
