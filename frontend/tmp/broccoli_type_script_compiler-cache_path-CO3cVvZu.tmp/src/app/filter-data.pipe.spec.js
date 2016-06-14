"use strict";
var testing_1 = require('@angular/core/testing');
var filter_data_pipe_1 = require('./filter-data.pipe');
testing_1.describe('FilterData Pipe', function () {
    testing_1.beforeEachProviders(function () { return [filter_data_pipe_1.FilterData]; });
    var arrOfElems = [{ name: 'Uno' }, { name: 'Duo' }];
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
//# sourceMappingURL=filter-data.pipe.spec.js.map