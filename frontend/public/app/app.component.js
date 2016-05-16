System.register(['rxjs/add/operator/map', "angular2/core", "angular2/router", "./view/index", "./user/index", "./point/point-list.component", "./project/index"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, index_1, index_2, point_list_component_1, index_3;
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
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (point_list_component_1_1) {
                point_list_component_1 = point_list_component_1_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n          <nav>\n            <ul class=\"menu\">\n                <li>\n                    <a [routerLink]=\"['Views']\">Views</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['Users']\">Users</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['Points']\">Points</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['Projects']\">Projects</a>\n                </li>\n            </ul>\n          </nav>\n          <router-outlet></router-outlet>\n",
                    }),
                    router_1.RouteConfig([
                        { path: '/view/:id', name: 'View', component: index_1.ViewComponent },
                        // {path:'/view:id', name: 'View', component: ViewComponent},
                        { path: '/views', name: 'Views', component: index_1.ViewListComponent },
                        { path: '/users', name: 'Users', component: index_2.UserListComponent },
                        { path: '/points', name: 'Points', component: point_list_component_1.PointListComponent },
                        { path: '/projects', name: 'Projects', component: index_3.ProjectListComponent },
                        { path: '/project/:id', name: 'ProjectsSingle', component: index_3.ProjectSingleComponent },
                        { path: '/project/form', name: 'ProjectForm', component: index_3.ProjectFormComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQW9DSUE7Z0JBRUFDLENBQUNBO2dCQXRDTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLENBQUNBO3dCQUMvQkEsUUFBUUEsRUFBRUEsc2pCQWtCYkE7cUJBQ0FBLENBQUNBO29CQUVEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1RBLEVBQUNBLElBQUlBLEVBQUNBLFdBQVdBLEVBQUVBLElBQUlBLEVBQUVBLE1BQU1BLEVBQUVBLFNBQVNBLEVBQUVBLHFCQUFhQSxFQUFDQTt3QkFDMURBLDZEQUE2REE7d0JBQzdEQSxFQUFDQSxJQUFJQSxFQUFDQSxRQUFRQSxFQUFTQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFRQSxTQUFTQSxFQUFFQSx5QkFBaUJBLEVBQUNBO3dCQUN6RUEsRUFBQ0EsSUFBSUEsRUFBQ0EsUUFBUUEsRUFBU0EsSUFBSUEsRUFBRUEsT0FBT0EsRUFBUUEsU0FBU0EsRUFBRUEseUJBQWlCQSxFQUFDQTt3QkFDekVBLEVBQUNBLElBQUlBLEVBQUNBLFNBQVNBLEVBQVNBLElBQUlBLEVBQUVBLFFBQVFBLEVBQVFBLFNBQVNBLEVBQUVBLHlDQUFrQkEsRUFBQ0E7d0JBQzVFQSxFQUFDQSxJQUFJQSxFQUFDQSxXQUFXQSxFQUFTQSxJQUFJQSxFQUFFQSxVQUFVQSxFQUFRQSxTQUFTQSxFQUFFQSw0QkFBb0JBLEVBQUNBO3dCQUNsRkEsRUFBQ0EsSUFBSUEsRUFBQ0EsY0FBY0EsRUFBU0EsSUFBSUEsRUFBRUEsZ0JBQWdCQSxFQUFRQSxTQUFTQSxFQUFFQSw4QkFBc0JBLEVBQUNBO3dCQUM3RkEsRUFBQ0EsSUFBSUEsRUFBQ0EsZUFBZUEsRUFBU0EsSUFBSUEsRUFBRUEsYUFBYUEsRUFBUUEsU0FBU0EsRUFBRUEsNEJBQW9CQSxFQUFDQTtxQkFDNUZBLENBQUNBOztpQ0FNREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQXZDQSxBQXVDQ0EsSUFBQTtZQXZDRCx1Q0F1Q0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5pbXBvcnQge1ZpZXdDb21wb25lbnQsIFZpZXdMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi92aWV3L2luZGV4XCI7XG5cbmltcG9ydCB7VXNlckxpc3RDb21wb25lbnR9IGZyb20gXCIuL3VzZXIvaW5kZXhcIjtcblxuaW1wb3J0IHtQb2ludExpc3RDb21wb25lbnR9IGZyb20gXCIuL3BvaW50L3BvaW50LWxpc3QuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7XG4gICAgUHJvamVjdFNpbmdsZUNvbXBvbmVudCxcbiAgICBQcm9qZWN0TGlzdENvbXBvbmVudCxcbiAgICBQcm9qZWN0Rm9ybUNvbXBvbmVudFxuICAgIH0gZnJvbSBcIi4vcHJvamVjdC9pbmRleFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnVmlld3MnXVwiPlZpZXdzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ1VzZXJzJ11cIj5Vc2VyczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydQb2ludHMnXVwiPlBvaW50czwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydQcm9qZWN0cyddXCI+UHJvamVjdHM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuYCxcbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6Jy92aWV3LzppZCcsIG5hbWU6ICdWaWV3JywgY29tcG9uZW50OiBWaWV3Q29tcG9uZW50fSxcbiAgICAvLyB7cGF0aDonL3ZpZXc6aWQnLCBuYW1lOiAnVmlldycsIGNvbXBvbmVudDogVmlld0NvbXBvbmVudH0sXG4gICAge3BhdGg6Jy92aWV3cycsICAgICAgICBuYW1lOiAnVmlld3MnLCAgICAgICBjb21wb25lbnQ6IFZpZXdMaXN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDonL3VzZXJzJywgICAgICAgIG5hbWU6ICdVc2VycycsICAgICAgIGNvbXBvbmVudDogVXNlckxpc3RDb21wb25lbnR9LFxuICAgIHtwYXRoOicvcG9pbnRzJywgICAgICAgIG5hbWU6ICdQb2ludHMnLCAgICAgICBjb21wb25lbnQ6IFBvaW50TGlzdENvbXBvbmVudH0sXG4gICAge3BhdGg6Jy9wcm9qZWN0cycsICAgICAgICBuYW1lOiAnUHJvamVjdHMnLCAgICAgICBjb21wb25lbnQ6IFByb2plY3RMaXN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDonL3Byb2plY3QvOmlkJywgICAgICAgIG5hbWU6ICdQcm9qZWN0c1NpbmdsZScsICAgICAgIGNvbXBvbmVudDogUHJvamVjdFNpbmdsZUNvbXBvbmVudH0sXG4gICAge3BhdGg6Jy9wcm9qZWN0L2Zvcm0nLCAgICAgICAgbmFtZTogJ1Byb2plY3RGb3JtJywgICAgICAgY29tcG9uZW50OiBQcm9qZWN0Rm9ybUNvbXBvbmVudH0sXG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
