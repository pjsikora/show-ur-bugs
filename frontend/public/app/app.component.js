System.register(['rxjs/add/operator/map', "angular2/core", "angular2/router", "./view/view.component", "./project/project.component", "./project/project.list.component", "./project/project.form.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, view_component_1, project_component_1, project_list_component_1, project_form_component_1;
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
            function (project_component_1_1) {
                project_component_1 = project_component_1_1;
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
                        template: "\n          <h1>Component Router</h1>\n          <nav>\n            <ul class=\"menu\">\n                <li>\n                    <a [routerLink]=\"['View']\">View</a>\n                </li>\n                <li><a [routerLink]=\"['Project']\">Project</a></li>\n                <li><a [routerLink]=\"['Projects']\">Projects</a></li>\n                <li><a [routerLink]=\"['ProjectForm']\">Project form</a></li>\n            </ul>\n            \n            \n            \n          </nav>\n          <router-outlet></router-outlet>\n",
                    }),
                    router_1.RouteConfig([
                        { path: '/view', name: 'View', component: view_component_1.ViewComponent },
                        { path: '/project', name: 'Project', component: project_component_1.ProjectComponent },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBNkJJQTtnQkFFQUMsQ0FBQ0E7Z0JBL0JMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7d0JBQy9CQSxRQUFRQSxFQUFFQSwwaEJBZ0JiQTtxQkFDQUEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDVEEsRUFBQ0EsSUFBSUEsRUFBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsU0FBU0EsRUFBRUEsOEJBQWFBLEVBQUNBO3dCQUN0REEsRUFBQ0EsSUFBSUEsRUFBQ0EsVUFBVUEsRUFBU0EsSUFBSUEsRUFBRUEsU0FBU0EsRUFBUUEsU0FBU0EsRUFBRUEsb0NBQWdCQSxFQUFDQTt3QkFDNUVBLEVBQUNBLElBQUlBLEVBQUNBLFdBQVdBLEVBQVNBLElBQUlBLEVBQUVBLFVBQVVBLEVBQVFBLFNBQVNBLEVBQUVBLDZDQUFvQkEsRUFBQ0E7d0JBQ2xGQSxFQUFDQSxJQUFJQSxFQUFDQSxlQUFlQSxFQUFTQSxJQUFJQSxFQUFFQSxhQUFhQSxFQUFRQSxTQUFTQSxFQUFFQSw2Q0FBb0JBLEVBQUNBO3FCQUU1RkEsQ0FBQ0E7O2lDQUtEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBaENBLEFBZ0NDQSxJQUFBO1lBaENELHVDQWdDQyxDQUFBOzs7O0FBQ0QsK0VBQStFO0FBQy9FLHFEQUFxRDtBQUVyRCxFQUFFO0FBQ0YsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsS0FBSztBQUNMLEtBQUs7QUFDTCw0QkFBNEI7QUFDNUIsa0RBQWtEO0FBQ2xELHlDQUF5QztBQUN6QyxRQUFRO0FBQ1IsSUFBSTtBQUNKLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLEtBQUs7QUFDTCxLQUFLO0FBQ0wseUJBQXlCO0FBQ3pCLGtEQUFrRDtBQUNsRCxzQ0FBc0M7QUFDdEMsRUFBRTtBQUNGLFFBQVE7QUFDUixJQUFJIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbmltcG9ydCB7Vmlld0NvbXBvbmVudH0gZnJvbSBcIi4vdmlldy92aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9qZWN0Q29tcG9uZW50fSBmcm9tIFwiLi9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2plY3RMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9wcm9qZWN0L3Byb2plY3QubGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7UHJvamVjdEZvcm1Db21wb25lbnR9IGZyb20gXCIuL3Byb2plY3QvcHJvamVjdC5mb3JtLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgPGgxPkNvbXBvbmVudCBSb3V0ZXI8L2gxPlxuICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ1ZpZXcnXVwiPlZpZXc8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydQcm9qZWN0J11cIj5Qcm9qZWN0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnUHJvamVjdHMnXVwiPlByb2plY3RzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnUHJvamVjdEZvcm0nXVwiPlByb2plY3QgZm9ybTwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG5gLFxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gICAge3BhdGg6Jy92aWV3JywgbmFtZTogJ1ZpZXcnLCBjb21wb25lbnQ6IFZpZXdDb21wb25lbnR9LFxuICAgIHtwYXRoOicvcHJvamVjdCcsICAgICAgICBuYW1lOiAnUHJvamVjdCcsICAgICAgIGNvbXBvbmVudDogUHJvamVjdENvbXBvbmVudH0sXG4gICAge3BhdGg6Jy9wcm9qZWN0cycsICAgICAgICBuYW1lOiAnUHJvamVjdHMnLCAgICAgICBjb21wb25lbnQ6IFByb2plY3RMaXN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDonL3Byb2plY3QvZm9ybScsICAgICAgICBuYW1lOiAnUHJvamVjdEZvcm0nLCAgICAgICBjb21wb25lbnQ6IFByb2plY3RGb3JtQ29tcG9uZW50fSxcbiAgICAvLyB7cGF0aDonL3BvaW50cycsICAgICAgbmFtZTogJ1BvaW50JywgICBjb21wb25lbnQ6IFZpZXdVbm99XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG59XG4vLzxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwibmV3UGVyc29uLm5hbWVcIiAoa2V5dXAuZW50ZXIpPVwic2F2ZVBlb3BsZSgpXCI+XG4vLzxidXR0b24gKGNsaWNrKT1cInNhdmVQZW9wbGUoKVwiPlNhdmUgcGVvcGxlPC9idXR0b24+XG5cbi8vXG4vLyBAQ29tcG9uZW50KHtcbi8vICAgICB0ZW1wbGF0ZTogYFxuLy8gXHRcdDxoMT5Qcm9qZWN0PC9oMT5cbi8vIFx0YFxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBBcHBQcm9qZWN0IHtcbi8vICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU2VydmljZTpBcHBTZXJ2aWNlKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdSb3V0ZTogUHJvamVjdCcpO1xuLy8gICAgIH1cbi8vIH1cbi8vIEBDb21wb25lbnQoe1xuLy8gICAgIHRlbXBsYXRlOiBgXG4vLyBcdFx0PGgxPlZpZXc8L2gxPlxuLy8gXHRgXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEFwcFZpZXcge1xuLy8gICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTZXJ2aWNlOkFwcFNlcnZpY2UpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1JvdXRlOiBWaWV3Jyk7XG4vL1xuLy8gICAgIH1cbi8vIH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
