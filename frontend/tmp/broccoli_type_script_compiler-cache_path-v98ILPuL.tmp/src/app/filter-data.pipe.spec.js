"use strict";
var testing_1 = require('@angular/core/testing');
var filter_data_pipe_1 = require('./filter-data.pipe');
testing_1.describe('FilterData Pipe', function () {
    testing_1.beforeEachProviders(function () { return [filter_data_pipe_1.FilterData]; });
    var arrOfElems = [{ name: 'Uno' }, { name: 'Duo' }];
    var arrOfArgs = ['dd', 'o'];
    testing_1.it('should transform the input', testing_1.inject([filter_data_pipe_1.FilterData], function (pipe) {
        testing_1.expect(pipe.transform(arrOfElems, arrOfArgs)).toBe(null);
    }));
    testing_1.it('should transform the', testing_1.inject([filter_data_pipe_1.FilterData], function (pipe) {
        var arrOfArgs = ['o', 'o'];
        testing_1.expect(pipe.transform(arrOfElems, arrOfArgs)).toBe(1);
    }));
});
//# sourceMappingURL=filter-data.pipe.spec.js.map