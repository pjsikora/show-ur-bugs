"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var index_1 = require('./app/index');
var http_1 = require("@angular/http");
var router_1 = require('@angular/router');
var common_1 = require('@angular/common'); //Hash location # in links
if (index_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(index_1.Ng2cliAppComponent, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, {
        useClass: common_1.HashLocationStrategy
    })
]);
//# sourceMappingURL=main.js.map