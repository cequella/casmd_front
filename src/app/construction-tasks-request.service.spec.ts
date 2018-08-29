import { TestBed, inject } from '@angular/core/testing';

import { ConstructionTasksRequestService } from './construction-tasks-request.service';

describe('ConstructionTasksRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstructionTasksRequestService]
    });
  });

  it('should be created', inject([ConstructionTasksRequestService], (service: ConstructionTasksRequestService) => {
    expect(service).toBeTruthy();
  }));
});
