import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from "angular2/http";
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS,
    Location,
    LocationStrategy,
    HashLocationStrategy} from "angular2/router";

import {AppComponent} from "./app.component";
import {AppService} from "./app.service";

bootstrap(AppComponent, [
    AppService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);