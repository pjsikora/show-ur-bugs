"use strict";
var testing_1 = require('@angular/core/testing');
var ng2cli_component_1 = require('../app/ng2cli.component');
testing_1.beforeEachProviders(function () { return [ng2cli_component_1.Ng2cliAppComponent]; });
testing_1.describe('App: Ng2cli', function () {
    testing_1.it('should create the app', testing_1.inject([ng2cli_component_1.Ng2cliAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'ng2cli works!\'', testing_1.inject([ng2cli_component_1.Ng2cliAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('ng2cli works!');
    }));
});
//# sourceMappingURL=ng2cli.component.spec.js.map