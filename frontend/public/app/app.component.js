System.register(['rxjs/add/operator/map', "angular2/core", "angular2/router", "./view/view.component", "./view/view.list.component", "./project/project.list.component", "./project/project.form.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, view_component_1, view_list_component_1, project_list_component_1, project_form_component_1;
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
            function (view_list_component_1_1) {
                view_list_component_1 = view_list_component_1_1;
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
                        template: "\n          <h1>Component Router</h1>\n          <nav>\n            <ul class=\"menu\">\n                <li>\n                    <a [routerLink]=\"['View']\">View</a>\n                </li><li>\n                    <a [routerLink]=\"['Views']\">Views</a>\n                </li>\n                <li><a [routerLink]=\"['Projects']\">Projects</a></li>\n                <li><a [routerLink]=\"['ProjectForm']\">Project form</a></li>\n            </ul>\n            \n            \n            \n          </nav>\n          <router-outlet></router-outlet>\n",
                    }),
                    router_1.RouteConfig([
                        { path: '/view', name: 'View', component: view_component_1.ViewComponent },
                        { path: '/views', name: 'Views', component: view_list_component_1.ViewListComponent },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBOEJJQTtnQkFFQUMsQ0FBQ0E7Z0JBaENMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7d0JBQy9CQSxRQUFRQSxFQUFFQSw0aUJBaUJiQTtxQkFDQUEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDVEEsRUFBQ0EsSUFBSUEsRUFBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsU0FBU0EsRUFBRUEsOEJBQWFBLEVBQUNBO3dCQUN0REEsRUFBQ0EsSUFBSUEsRUFBQ0EsUUFBUUEsRUFBU0EsSUFBSUEsRUFBRUEsT0FBT0EsRUFBUUEsU0FBU0EsRUFBRUEsdUNBQWlCQSxFQUFDQTt3QkFDekVBLEVBQUNBLElBQUlBLEVBQUNBLFdBQVdBLEVBQVNBLElBQUlBLEVBQUVBLFVBQVVBLEVBQVFBLFNBQVNBLEVBQUVBLDZDQUFvQkEsRUFBQ0E7d0JBQ2xGQSxFQUFDQSxJQUFJQSxFQUFDQSxlQUFlQSxFQUFTQSxJQUFJQSxFQUFFQSxhQUFhQSxFQUFRQSxTQUFTQSxFQUFFQSw2Q0FBb0JBLEVBQUNBO3FCQUU1RkEsQ0FBQ0E7O2lDQUtEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBakNBLEFBaUNDQSxJQUFBO1lBakNELHVDQWlDQyxDQUFBOzs7O0FBQ0QsK0VBQStFO0FBQy9FLHFEQUFxRDtBQUVyRCxFQUFFO0FBQ0YsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsS0FBSztBQUNMLEtBQUs7QUFDTCw0QkFBNEI7QUFDNUIsa0RBQWtEO0FBQ2xELHlDQUF5QztBQUN6QyxRQUFRO0FBQ1IsSUFBSTtBQUNKLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLEtBQUs7QUFDTCxLQUFLO0FBQ0wseUJBQXlCO0FBQ3pCLGtEQUFrRDtBQUNsRCxzQ0FBc0M7QUFDdEMsRUFBRTtBQUNGLFFBQVE7QUFDUixJQUFJIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbmltcG9ydCB7Vmlld0NvbXBvbmVudH0gZnJvbSBcIi4vdmlldy92aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWaWV3TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vdmlldy92aWV3Lmxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2plY3RDb21wb25lbnR9IGZyb20gXCIuL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7UHJvamVjdExpc3RDb21wb25lbnR9IGZyb20gXCIuL3Byb2plY3QvcHJvamVjdC5saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9qZWN0Rm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vcHJvamVjdC9wcm9qZWN0LmZvcm0uY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICA8aDE+Q29tcG9uZW50IFJvdXRlcjwvaDE+XG4gICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnVmlldyddXCI+VmlldzwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPjxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydWaWV3cyddXCI+Vmlld3M8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydQcm9qZWN0cyddXCI+UHJvamVjdHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydQcm9qZWN0Rm9ybSddXCI+UHJvamVjdCBmb3JtPC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbmAsXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDonL3ZpZXcnLCBuYW1lOiAnVmlldycsIGNvbXBvbmVudDogVmlld0NvbXBvbmVudH0sXG4gICAge3BhdGg6Jy92aWV3cycsICAgICAgICBuYW1lOiAnVmlld3MnLCAgICAgICBjb21wb25lbnQ6IFZpZXdMaXN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDonL3Byb2plY3RzJywgICAgICAgIG5hbWU6ICdQcm9qZWN0cycsICAgICAgIGNvbXBvbmVudDogUHJvamVjdExpc3RDb21wb25lbnR9LFxuICAgIHtwYXRoOicvcHJvamVjdC9mb3JtJywgICAgICAgIG5hbWU6ICdQcm9qZWN0Rm9ybScsICAgICAgIGNvbXBvbmVudDogUHJvamVjdEZvcm1Db21wb25lbnR9LFxuICAgIC8vIHtwYXRoOicvcG9pbnRzJywgICAgICBuYW1lOiAnUG9pbnQnLCAgIGNvbXBvbmVudDogVmlld1Vub31cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cbn1cbi8vPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJuZXdQZXJzb24ubmFtZVwiIChrZXl1cC5lbnRlcik9XCJzYXZlUGVvcGxlKClcIj5cbi8vPGJ1dHRvbiAoY2xpY2spPVwic2F2ZVBlb3BsZSgpXCI+U2F2ZSBwZW9wbGU8L2J1dHRvbj5cblxuLy9cbi8vIEBDb21wb25lbnQoe1xuLy8gICAgIHRlbXBsYXRlOiBgXG4vLyBcdFx0PGgxPlByb2plY3Q8L2gxPlxuLy8gXHRgXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEFwcFByb2plY3Qge1xuLy8gICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTZXJ2aWNlOkFwcFNlcnZpY2UpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1JvdXRlOiBQcm9qZWN0Jyk7XG4vLyAgICAgfVxuLy8gfVxuLy8gQENvbXBvbmVudCh7XG4vLyAgICAgdGVtcGxhdGU6IGBcbi8vIFx0XHQ8aDE+VmlldzwvaDE+XG4vLyBcdGBcbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgQXBwVmlldyB7XG4vLyAgICAgY29uc3RydWN0b3IocHVibGljIGFwcFNlcnZpY2U6QXBwU2VydmljZSkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnUm91dGU6IFZpZXcnKTtcbi8vXG4vLyAgICAgfVxuLy8gfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
