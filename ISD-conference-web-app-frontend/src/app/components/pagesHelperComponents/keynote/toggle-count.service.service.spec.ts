import { TestBed } from '@angular/core/testing';

import { ToggleCountService} from './toggle-count.service.service';

describe('ToggleCount.ServiceService', () => {
  let service: ToggleCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
