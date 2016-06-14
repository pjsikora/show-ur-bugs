"use strict";
var testing_1 = require('@angular/core/testing');
var user_service_1 = require('./user.service');
testing_1.describe('User Service', function () {
    testing_1.beforeEachProviders(function () { return [user_service_1.UserService]; });
    testing_1.it('should ...', testing_1.inject([user_service_1.UserService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=user.service.spec.js.map