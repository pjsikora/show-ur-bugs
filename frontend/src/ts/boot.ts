import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from "angular2/http";

import {AppComponent} from "./app.component";
import {AppService} from "./app.service";


bootstrap(AppComponent, [AppService, HTTP_PROVIDERS]);