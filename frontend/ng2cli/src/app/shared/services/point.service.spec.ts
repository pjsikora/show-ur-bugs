import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PointService } from './point.service';

describe('Point Service', () => {
  beforeEachProviders(() => [PointService]);

  it('should ...',
      inject([PointService], (service: PointService) => {
    expect(service).toBeTruthy();
  }));
});
