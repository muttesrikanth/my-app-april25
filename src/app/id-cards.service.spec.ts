import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // <-- Add this

import { IdCardsService } from './id-cards.service';

describe('IdCardsService', () => {
  let service: IdCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]  // <-- Add this
    });
    service = TestBed.inject(IdCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
