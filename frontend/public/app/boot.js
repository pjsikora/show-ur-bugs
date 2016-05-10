System.register(['angular2/platform/browser', "angular2/http", 'angular2/core', "angular2/router", "./app.component", "./app.service"], function(exports_1) {
    var browser_1, http_1, core_1, router_1, app_component_1, app_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
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
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQSxtQkFBUyxDQUFDLDRCQUFZLEVBQUU7Z0JBQ3BCLHdCQUFVO2dCQUNWLHFCQUFjO2dCQUNkLHlCQUFnQjtnQkFDaEIsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUM7YUFDOUQsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3NlcidcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTLFxuICAgIExvY2F0aW9uLFxuICAgIExvY2F0aW9uU3RyYXRlZ3ksXG4gICAgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7QXBwU2VydmljZX0gZnJvbSBcIi4vYXBwLnNlcnZpY2VcIjtcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xuICAgIEFwcFNlcnZpY2UsXG4gICAgSFRUUF9QUk9WSURFUlMsXG4gICAgUk9VVEVSX1BST1ZJREVSUyxcbiAgICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9KVxuXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
