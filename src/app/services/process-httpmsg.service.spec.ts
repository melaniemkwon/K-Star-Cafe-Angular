import { TestBed, inject } from '@angular/core/testing';

import { ProcessHttpMsgService } from './process-httpmsg.service';

describe('ProcessHttpmsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessHttpMsgService]
    });
  });

  it('should be created', inject([ProcessHttpMsgService], (service: ProcessHttpMsgService) => {
    expect(service).toBeTruthy();
  }));
});
