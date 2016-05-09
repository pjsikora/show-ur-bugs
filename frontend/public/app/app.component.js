System.register(['rxjs/add/operator/map', "angular2/core", "angular2/router", "./view/view.component", "./user/user.list.component", "./view/view.list.component", "./point/point.list.component", "./project/index"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, view_component_1, user_list_component_1, view_list_component_1, point_list_component_1, index_1;
    var AppComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (user_list_component_1_1) {
                user_list_component_1 = user_list_component_1_1;
            },
            function (view_list_component_1_1) {
                view_list_component_1 = view_list_component_1_1;
            },
            function (point_list_component_1_1) {
                point_list_component_1 = point_list_component_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n          <nav>\n            <ul class=\"menu\">\n                <li>\n                    <a [routerLink]=\"['View']\">View</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['Views']\">Views</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['Users']\">Users</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['Points']\">Points</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['Projects']\">Projects</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['ProjectForm']\">Project form</a>\n                </li>\n            </ul>\n          </nav>\n          <router-outlet></router-outlet>\n",
                    }),
                    router_1.RouteConfig([
                        { path: '/view', name: 'View', component: view_component_1.ViewComponent },
                        // {path:'/view:id', name: 'View', component: ViewComponent},
                        { path: '/views', name: 'Views', component: view_list_component_1.ViewListComponent },
                        { path: '/users', name: 'Users', component: user_list_component_1.UserListComponent },
                        { path: '/points', name: 'Points', component: point_list_component_1.PointListComponent },
                        { path: '/projects', name: 'Projects', component: index_1.ProjectListComponent },
                        { path: '/project/:id', name: 'ProjectsSingle', component: index_1.ProjectSingleComponent },
                        { path: '/project/form', name: 'ProjectForm', component: index_1.ProjectFormComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQXlDSUE7Z0JBRUFDLENBQUNBO2dCQTNDTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLENBQUNBO3dCQUMvQkEsUUFBUUEsRUFBRUEscXhCQXdCYkE7cUJBQ0FBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1RBLEVBQUNBLElBQUlBLEVBQUNBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLE1BQU1BLEVBQUVBLFNBQVNBLEVBQUVBLDhCQUFhQSxFQUFDQTt3QkFDdERBLDZEQUE2REE7d0JBQzdEQSxFQUFDQSxJQUFJQSxFQUFDQSxRQUFRQSxFQUFTQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFRQSxTQUFTQSxFQUFFQSx1Q0FBaUJBLEVBQUNBO3dCQUN6RUEsRUFBQ0EsSUFBSUEsRUFBQ0EsUUFBUUEsRUFBU0EsSUFBSUEsRUFBRUEsT0FBT0EsRUFBUUEsU0FBU0EsRUFBRUEsdUNBQWlCQSxFQUFDQTt3QkFDekVBLEVBQUNBLElBQUlBLEVBQUNBLFNBQVNBLEVBQVNBLElBQUlBLEVBQUVBLFFBQVFBLEVBQVFBLFNBQVNBLEVBQUVBLHlDQUFrQkEsRUFBQ0E7d0JBQzVFQSxFQUFDQSxJQUFJQSxFQUFDQSxXQUFXQSxFQUFTQSxJQUFJQSxFQUFFQSxVQUFVQSxFQUFRQSxTQUFTQSxFQUFFQSw0QkFBb0JBLEVBQUNBO3dCQUNsRkEsRUFBQ0EsSUFBSUEsRUFBQ0EsY0FBY0EsRUFBU0EsSUFBSUEsRUFBRUEsZ0JBQWdCQSxFQUFRQSxTQUFTQSxFQUFFQSw4QkFBc0JBLEVBQUNBO3dCQUM3RkEsRUFBQ0EsSUFBSUEsRUFBQ0EsZUFBZUEsRUFBU0EsSUFBSUEsRUFBRUEsYUFBYUEsRUFBUUEsU0FBU0EsRUFBRUEsNEJBQW9CQSxFQUFDQTtxQkFFNUZBLENBQUNBOztpQ0FLREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQTVDQSxBQTRDQ0EsSUFBQTtZQTVDRCx1Q0E0Q0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5pbXBvcnQge1ZpZXdDb21wb25lbnR9IGZyb20gXCIuL3ZpZXcvdmlldy5jb21wb25lbnRcIjtcblxuaW1wb3J0IHtVc2VyTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vdXNlci91c2VyLmxpc3QuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7Vmlld0xpc3RDb21wb25lbnR9IGZyb20gXCIuL3ZpZXcvdmlldy5saXN0LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQge1BvaW50TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vcG9pbnQvcG9pbnQubGlzdC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHtcbiAgICBQcm9qZWN0Q29tcG9uZW50LFxuICAgIFByb2plY3RTaW5nbGVDb21wb25lbnQsXG4gICAgUHJvamVjdExpc3RDb21wb25lbnQsXG4gICAgUHJvamVjdEZvcm1Db21wb25lbnRcbiAgICB9IGZyb20gXCIuL3Byb2plY3QvaW5kZXhcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ1ZpZXcnXVwiPlZpZXc8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnVmlld3MnXVwiPlZpZXdzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ1VzZXJzJ11cIj5Vc2VyczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydQb2ludHMnXVwiPlBvaW50czwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydQcm9qZWN0cyddXCI+UHJvamVjdHM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnUHJvamVjdEZvcm0nXVwiPlByb2plY3QgZm9ybTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG5gLFxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6Jy92aWV3JywgbmFtZTogJ1ZpZXcnLCBjb21wb25lbnQ6IFZpZXdDb21wb25lbnR9LFxuICAgIC8vIHtwYXRoOicvdmlldzppZCcsIG5hbWU6ICdWaWV3JywgY29tcG9uZW50OiBWaWV3Q29tcG9uZW50fSxcbiAgICB7cGF0aDonL3ZpZXdzJywgICAgICAgIG5hbWU6ICdWaWV3cycsICAgICAgIGNvbXBvbmVudDogVmlld0xpc3RDb21wb25lbnR9LFxuICAgIHtwYXRoOicvdXNlcnMnLCAgICAgICAgbmFtZTogJ1VzZXJzJywgICAgICAgY29tcG9uZW50OiBVc2VyTGlzdENvbXBvbmVudH0sXG4gICAge3BhdGg6Jy9wb2ludHMnLCAgICAgICAgbmFtZTogJ1BvaW50cycsICAgICAgIGNvbXBvbmVudDogUG9pbnRMaXN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDonL3Byb2plY3RzJywgICAgICAgIG5hbWU6ICdQcm9qZWN0cycsICAgICAgIGNvbXBvbmVudDogUHJvamVjdExpc3RDb21wb25lbnR9LFxuICAgIHtwYXRoOicvcHJvamVjdC86aWQnLCAgICAgICAgbmFtZTogJ1Byb2plY3RzU2luZ2xlJywgICAgICAgY29tcG9uZW50OiBQcm9qZWN0U2luZ2xlQ29tcG9uZW50fSxcbiAgICB7cGF0aDonL3Byb2plY3QvZm9ybScsICAgICAgICBuYW1lOiAnUHJvamVjdEZvcm0nLCAgICAgICBjb21wb25lbnQ6IFByb2plY3RGb3JtQ29tcG9uZW50fSxcbiAgICAvLyB7cGF0aDonL3BvaW50cycsICAgICAgbmFtZTogJ1BvaW50JywgICBjb21wb25lbnQ6IFZpZXdVbm99XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
