System.register(['angular2/platform/browser', "angular2/http", "angular2/router", "./app.component", "./app.service"], function(exports_1) {
    var browser_1, http_1, router_1, app_component_1, app_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                app_service_1.AppService,
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQSxtQkFBUyxDQUFDLDRCQUFZLEVBQUU7Z0JBQ3BCLHdCQUFVO2dCQUNWLHFCQUFjO2dCQUNkLHlCQUFnQjthQUNuQixDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJ1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBcHBTZXJ2aWNlfSBmcm9tIFwiLi9hcHAuc2VydmljZVwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG4gICAgQXBwU2VydmljZSxcbiAgICBIVFRQX1BST1ZJREVSUyxcbiAgICBST1VURVJfUFJPVklERVJTLFxuXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
