import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅

import { CustomLoginService } from './custom-login.service';

describe('CustomLoginService', () => {
  let service: CustomLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule] // ✅
    });
    service = TestBed.inject(CustomLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
