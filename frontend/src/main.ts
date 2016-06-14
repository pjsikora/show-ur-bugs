import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode, provide} from '@angular/core';
import {Ng2cliAppComponent, environment} from './app/index';
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_PROVIDERS} from '@angular/router';
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common'; //Hash location # in links

if (environment.production) {
    enableProdMode();
}

bootstrap(Ng2cliAppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {
        useClass: HashLocationStrategy
    })
    // provide(LocationStrategy, {
    //     useClass: PathLocationStrategy
    // })
]);
