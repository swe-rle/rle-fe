import { TestBed } from '@angular/core/testing';

import { LabMembersService } from './lab-members.service';

describe('LabMembersService', () => {
  let service: LabMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
