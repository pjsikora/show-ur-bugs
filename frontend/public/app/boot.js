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
                router_1.ROUTER_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQSxtQkFBUyxDQUFDLDRCQUFZLEVBQUU7Z0JBQ3BCLHdCQUFVO2dCQUNWLHFCQUFjO2dCQUNkLHlCQUFnQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0FwcFNlcnZpY2V9IGZyb20gXCIuL2FwcC5zZXJ2aWNlXCI7XG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcbiAgICBBcHBTZXJ2aWNlLFxuICAgIEhUVFBfUFJPVklERVJTLFxuICAgIFJPVVRFUl9QUk9WSURFUlNdKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
