import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router";

import {AppComponent} from "./app.component";
import {AppService} from "./app.service";

bootstrap(AppComponent, [
    AppService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS]);