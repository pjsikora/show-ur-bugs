System.register(['angular2/platform/browser', "angular2/http", "./app.component", "./app.service"], function(exports_1) {
    var browser_1, http_1, app_component_1, app_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [app_service_1.AppService, http_1.HTTP_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQSxtQkFBUyxDQUFDLDRCQUFZLEVBQUUsQ0FBQyx3QkFBVSxFQUFFLHFCQUFjLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3NlcidcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0FwcFNlcnZpY2V9IGZyb20gXCIuL2FwcC5zZXJ2aWNlXCI7XG5cblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW0FwcFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
