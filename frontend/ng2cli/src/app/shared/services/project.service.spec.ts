import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ProjectService } from './project.service';

describe('Project Service', () => {
  beforeEachProviders(() => [ProjectService]);

  it('should ...',
      inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));
});
