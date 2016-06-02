import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { FilterData } from './filter-data.pipe';

describe('FilterData Pipe', () => {
  beforeEachProviders(() => [FilterData]);

  it('should transform the input', inject([FilterData], (pipe: FilterData) => {
      // expect(pipe.transform()).toBe(null);
  }));
});
