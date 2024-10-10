import { TestBed } from '@angular/core/testing';

import { TokenmangementInterceptor } from './tokenmangement.interceptor';

describe('TokenmangementInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenmangementInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenmangementInterceptor = TestBed.inject(TokenmangementInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
