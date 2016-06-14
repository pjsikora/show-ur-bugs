"use strict";
var testing_1 = require('@angular/core/testing');
var point_service_1 = require('./point.service');
testing_1.describe('Point Service', function () {
    testing_1.beforeEachProviders(function () { return [point_service_1.PointService]; });
    testing_1.it('should ...', testing_1.inject([point_service_1.PointService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=point.service.spec.js.map