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
  var arrOfElems = [{name: 'Uno'}, {name: 'Duo'}];
  var arrOfArgs = ['dd', 'o'];


  // it('should transform the input', inject([FilterData], (pipe: FilterData) => {
  //     expect(pipe.transform(arrOfElems, arrOfArgs)).toBe(null);
  // }));
  // it('should transform the', inject([FilterData], (pipe: FilterData) => {
  //   var arrOfArgs = ['o', 'o'];
  //
  //     expect(pipe.transform(arrOfElems, arrOfArgs)).toBe(1);
  // }));
});
