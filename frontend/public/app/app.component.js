System.register(['rxjs/add/operator/map', "angular2/core", "angular2/router", "./view/view.component", "./user/user.list.component", "./view/view.list.component", "./point/point.list.component", "./project/project.list.component", "./project/project.form.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, view_component_1, user_list_component_1, view_list_component_1, point_list_component_1, project_list_component_1, project_form_component_1;
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
            function (project_list_component_1_1) {
                project_list_component_1 = project_list_component_1_1;
            },
            function (project_form_component_1_1) {
                project_form_component_1 = project_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n          <nav>\n            <ul class=\"menu\">\n                <li>\n                    <a [routerLink]=\"['View']\">View</a>\n                </li><li>\n                    <a [routerLink]=\"['Views']\">Views</a>\n                </li><li>\n                    <a [routerLink]=\"['Users']\">Users</a>\n                </li><li>\n                    <a [routerLink]=\"['Points']\">Points</a>\n                </li>\n                <li><a [routerLink]=\"['Projects']\">Projects</a></li>\n                <li><a [routerLink]=\"['ProjectForm']\">Project form</a></li>\n            </ul>\n          </nav>\n          <router-outlet></router-outlet>\n",
                    }),
                    router_1.RouteConfig([
                        { path: '/view', name: 'View', component: view_component_1.ViewComponent },
                        { path: '/views', name: 'Views', component: view_list_component_1.ViewListComponent },
                        { path: '/users', name: 'Users', component: user_list_component_1.UserListComponent },
                        { path: '/points', name: 'Points', component: point_list_component_1.PointListComponent },
                        { path: '/projects', name: 'Projects', component: project_list_component_1.ProjectListComponent },
                        { path: '/project/form', name: 'ProjectForm', component: project_form_component_1.ProjectFormComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//<input type="text" [(ngModel)]="newPerson.name" (keyup.enter)="savePeople()">
//<button (click)="savePeople()">Save people</button>
//
// @Component({
//     template: `
// 		<h1>Project</h1>
// 	`
// })
// export class AppProject {
//     constructor(public appService:AppService) {
//         console.log('Route: Project');
//     }
// }
// @Component({
//     template: `
// 		<h1>View</h1>
// 	`
// })
// export class AppView {
//     constructor(public appService:AppService) {
//         console.log('Route: View');
//
//     }
// } 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBZ0NJQTtnQkFFQUMsQ0FBQ0E7Z0JBbENMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7d0JBQy9CQSxRQUFRQSxFQUFFQSwrb0JBaUJiQTtxQkFDQUEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDVEEsRUFBQ0EsSUFBSUEsRUFBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsU0FBU0EsRUFBRUEsOEJBQWFBLEVBQUNBO3dCQUN0REEsRUFBQ0EsSUFBSUEsRUFBQ0EsUUFBUUEsRUFBU0EsSUFBSUEsRUFBRUEsT0FBT0EsRUFBUUEsU0FBU0EsRUFBRUEsdUNBQWlCQSxFQUFDQTt3QkFDekVBLEVBQUNBLElBQUlBLEVBQUNBLFFBQVFBLEVBQVNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQVFBLFNBQVNBLEVBQUVBLHVDQUFpQkEsRUFBQ0E7d0JBQ3pFQSxFQUFDQSxJQUFJQSxFQUFDQSxTQUFTQSxFQUFTQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFRQSxTQUFTQSxFQUFFQSx5Q0FBa0JBLEVBQUNBO3dCQUM1RUEsRUFBQ0EsSUFBSUEsRUFBQ0EsV0FBV0EsRUFBU0EsSUFBSUEsRUFBRUEsVUFBVUEsRUFBUUEsU0FBU0EsRUFBRUEsNkNBQW9CQSxFQUFDQTt3QkFDbEZBLEVBQUNBLElBQUlBLEVBQUNBLGVBQWVBLEVBQVNBLElBQUlBLEVBQUVBLGFBQWFBLEVBQVFBLFNBQVNBLEVBQUVBLDZDQUFvQkEsRUFBQ0E7cUJBRTVGQSxDQUFDQTs7aUNBS0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FuQ0EsQUFtQ0NBLElBQUE7WUFuQ0QsdUNBbUNDLENBQUE7Ozs7QUFDRCwrRUFBK0U7QUFDL0UscURBQXFEO0FBRXJELEVBQUU7QUFDRixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixLQUFLO0FBQ0wsS0FBSztBQUNMLDRCQUE0QjtBQUM1QixrREFBa0Q7QUFDbEQseUNBQXlDO0FBQ3pDLFFBQVE7QUFDUixJQUFJO0FBQ0osZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsS0FBSztBQUNMLEtBQUs7QUFDTCx5QkFBeUI7QUFDekIsa0RBQWtEO0FBQ2xELHNDQUFzQztBQUN0QyxFQUFFO0FBQ0YsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVDb25maWcsIFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuaW1wb3J0IHtWaWV3Q29tcG9uZW50fSBmcm9tIFwiLi92aWV3L3ZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQge1VzZXJMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi91c2VyL3VzZXIubGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7Vmlld0xpc3RDb21wb25lbnR9IGZyb20gXCIuL3ZpZXcvdmlldy5saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQb2ludExpc3RDb21wb25lbnR9IGZyb20gXCIuL3BvaW50L3BvaW50Lmxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2plY3RDb21wb25lbnR9IGZyb20gXCIuL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7UHJvamVjdExpc3RDb21wb25lbnR9IGZyb20gXCIuL3Byb2plY3QvcHJvamVjdC5saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9qZWN0Rm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vcHJvamVjdC9wcm9qZWN0LmZvcm0uY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydWaWV3J11cIj5WaWV3PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+PGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ1ZpZXdzJ11cIj5WaWV3czwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPjxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydVc2VycyddXCI+VXNlcnM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT48bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnUG9pbnRzJ11cIj5Qb2ludHM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydQcm9qZWN0cyddXCI+UHJvamVjdHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydQcm9qZWN0Rm9ybSddXCI+UHJvamVjdCBmb3JtPC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbmAsXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDonL3ZpZXcnLCBuYW1lOiAnVmlldycsIGNvbXBvbmVudDogVmlld0NvbXBvbmVudH0sXG4gICAge3BhdGg6Jy92aWV3cycsICAgICAgICBuYW1lOiAnVmlld3MnLCAgICAgICBjb21wb25lbnQ6IFZpZXdMaXN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDonL3VzZXJzJywgICAgICAgIG5hbWU6ICdVc2VycycsICAgICAgIGNvbXBvbmVudDogVXNlckxpc3RDb21wb25lbnR9LFxuICAgIHtwYXRoOicvcG9pbnRzJywgICAgICAgIG5hbWU6ICdQb2ludHMnLCAgICAgICBjb21wb25lbnQ6IFBvaW50TGlzdENvbXBvbmVudH0sXG4gICAge3BhdGg6Jy9wcm9qZWN0cycsICAgICAgICBuYW1lOiAnUHJvamVjdHMnLCAgICAgICBjb21wb25lbnQ6IFByb2plY3RMaXN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDonL3Byb2plY3QvZm9ybScsICAgICAgICBuYW1lOiAnUHJvamVjdEZvcm0nLCAgICAgICBjb21wb25lbnQ6IFByb2plY3RGb3JtQ29tcG9uZW50fSxcbiAgICAvLyB7cGF0aDonL3BvaW50cycsICAgICAgbmFtZTogJ1BvaW50JywgICBjb21wb25lbnQ6IFZpZXdVbm99XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG59XG4vLzxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmV3UGVyc29uLm5hbWVcIiAoa2V5dXAuZW50ZXIpPVwic2F2ZVBlb3BsZSgpXCI+XG4vLzxidXR0b24gKGNsaWNrKT1cInNhdmVQZW9wbGUoKVwiPlNhdmUgcGVvcGxlPC9idXR0b24+XG5cbi8vXG4vLyBAQ29tcG9uZW50KHtcbi8vICAgICB0ZW1wbGF0ZTogYFxuLy8gXHRcdDxoMT5Qcm9qZWN0PC9oMT5cbi8vIFx0YFxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBBcHBQcm9qZWN0IHtcbi8vICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU2VydmljZTpBcHBTZXJ2aWNlKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdSb3V0ZTogUHJvamVjdCcpO1xuLy8gICAgIH1cbi8vIH1cbi8vIEBDb21wb25lbnQoe1xuLy8gICAgIHRlbXBsYXRlOiBgXG4vLyBcdFx0PGgxPlZpZXc8L2gxPlxuLy8gXHRgXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEFwcFZpZXcge1xuLy8gICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTZXJ2aWNlOkFwcFNlcnZpY2UpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1JvdXRlOiBWaWV3Jyk7XG4vL1xuLy8gICAgIH1cbi8vIH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
