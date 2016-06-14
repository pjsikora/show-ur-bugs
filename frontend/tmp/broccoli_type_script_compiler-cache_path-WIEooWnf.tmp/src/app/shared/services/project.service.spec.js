"use strict";
var testing_1 = require('@angular/core/testing');
var project_service_1 = require('./project.service');
testing_1.describe('Project Service', function () {
    testing_1.beforeEachProviders(function () { return [project_service_1.ProjectService]; });
    testing_1.it('should ...', testing_1.inject([project_service_1.ProjectService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=project.service.spec.js.map