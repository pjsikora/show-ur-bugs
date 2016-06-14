import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ViewService } from './view.service.ts';

describe('View Service', () => {
  beforeEachProviders(() => [ViewService]);

  it('should ...',
      inject([ViewService], (service: ViewService) => {
    expect(service).toBeTruthy();
  }));
});
