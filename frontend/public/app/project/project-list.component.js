System.register(['rxjs/add/operator/map', "angular2/core", "./project.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, project_service_1;
    var ProjectListComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            }],
        execute: function() {
            ProjectListComponent = (function () {
                function ProjectListComponent(projectService) {
                    this.projectService = projectService;
                }
                ProjectListComponent.prototype.getProjects = function () {
                    var _this = this;
                    this.projectService.getProjects()
                        .subscribe(function (data) {
                        // console.log(data);
                        _this.projects = data;
                        // this.lsPoints = this.points;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                        // console.log("Data loaded!")
                    });
                };
                ProjectListComponent.prototype.ngOnInit = function () {
                    this.getProjects();
                };
                ProjectListComponent = __decorate([
                    core_1.Component({
                        bindings: [project_service_1.ProjectService],
                        template: "\n            <a class=\"button\" href=\"/#/project/form\">Add new project</a>\n\t\t<h2>Projects list</h2>\n    <table>\n        <thead>\n            <tr>\n                <!--<td>_id</td>-->\n                <td>Project name</td>\n                <td>createDate</td>\n                <td>description</td>\n                <td>createdBy</td>\n                <td>isOpened</td>\n                <td>isDeleted</td>\n                <td></td>\n                <td></td>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#project of projects\" class=\"project\" >\n                <!--<td>{{project._id}}</td>-->\n                <td><a href=\"/#/project/{{project._id}}\">{{project.name}}</a></td>\n                <td>{{project.createDate}}</td>\n                <td>{{project.description}}</td>\n                <td>{{project.createdBy}}</td>\n                <td>{{project.isOpened}}</td>\n                <td>{{project.isDeleted}}</td>\n                <td><a href=\"\" class=\"button alert\">Delete</a></td>\n                <td><a href=\"\" class=\"button\">Edit</a></td>\n            </tr>\n        </tbody>\n   </table>\n\t"
                    }), 
                    __metadata('design:paramtypes', [project_service_1.ProjectService])
                ], ProjectListComponent);
                return ProjectListComponent;
            })();
            exports_1("ProjectListComponent", ProjectListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJQcm9qZWN0TGlzdENvbXBvbmVudCIsIlByb2plY3RMaXN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiUHJvamVjdExpc3RDb21wb25lbnQuZ2V0UHJvamVjdHMiLCJQcm9qZWN0TGlzdENvbXBvbmVudC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQXNDSUEsOEJBQW1CQSxjQUE2QkE7b0JBQTdCQyxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBZUE7Z0JBRWhEQSxDQUFDQTtnQkFJREQsMENBQVdBLEdBQVhBO29CQUFBRSxpQkFhQ0E7b0JBWkdBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFdBQVdBLEVBQUVBO3lCQUM1QkEsU0FBU0EsQ0FDTkEsVUFBQUEsSUFBSUE7d0JBQ0FBLHFCQUFxQkE7d0JBQ3JCQSxLQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTt3QkFDckJBLCtCQUErQkE7b0JBQ25DQSxDQUFDQSxFQUNEQSxVQUFBQSxLQUFLQSxJQUFJQSxPQUFBQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFuQ0EsQ0FBbUNBLEVBQzVDQTt3QkFDSUEsOEJBQThCQTtvQkFDbENBLENBQUNBLENBQ0pBLENBQUFBO2dCQUNUQSxDQUFDQTtnQkFFREYsdUNBQVFBLEdBQVJBO29CQUNJRyxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtnQkFDdkJBLENBQUNBO2dCQTdETEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsQ0FBQ0EsZ0NBQWNBLENBQUNBO3dCQUMxQkEsUUFBUUEsRUFBRUEsd29DQStCWkE7cUJBQ0RBLENBQUNBOzt5Q0E0QkRBO2dCQUFEQSwyQkFBQ0E7WUFBREEsQ0E5REEsQUE4RENBLElBQUE7WUE5REQsdURBOERDLENBQUEiLCJmaWxlIjoicHJvamVjdC9wcm9qZWN0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQge1Byb2plY3RTZXJ2aWNlfSBmcm9tIFwiLi9wcm9qZWN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgYmluZGluZ3M6IFtQcm9qZWN0U2VydmljZV0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uXCIgaHJlZj1cIi8jL3Byb2plY3QvZm9ybVwiPkFkZCBuZXcgcHJvamVjdDwvYT5cblx0XHQ8aDI+UHJvamVjdHMgbGlzdDwvaDI+XG4gICAgPHRhYmxlPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPCEtLTx0ZD5faWQ8L3RkPi0tPlxuICAgICAgICAgICAgICAgIDx0ZD5Qcm9qZWN0IG5hbWU8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5jcmVhdGVEYXRlPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+ZGVzY3JpcHRpb248L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5jcmVhdGVkQnk8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5pc09wZW5lZDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPmlzRGVsZXRlZDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwiI3Byb2plY3Qgb2YgcHJvamVjdHNcIiBjbGFzcz1cInByb2plY3RcIiA+XG4gICAgICAgICAgICAgICAgPCEtLTx0ZD57e3Byb2plY3QuX2lkfX08L3RkPi0tPlxuICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwiLyMvcHJvamVjdC97e3Byb2plY3QuX2lkfX1cIj57e3Byb2plY3QubmFtZX19PC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7cHJvamVjdC5jcmVhdGVEYXRlfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57e3Byb2plY3QuZGVzY3JpcHRpb259fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7cHJvamVjdC5jcmVhdGVkQnl9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7cHJvamVjdC5pc09wZW5lZH19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3twcm9qZWN0LmlzRGVsZXRlZH19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIlwiIGNsYXNzPVwiYnV0dG9uIGFsZXJ0XCI+RGVsZXRlPC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJcIiBjbGFzcz1cImJ1dHRvblwiPkVkaXQ8L2E+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICA8L3RhYmxlPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0Q29tcG9uZW50IHtcbiAgICBwcm9qZWN0cztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwcm9qZWN0U2VydmljZTpQcm9qZWN0U2VydmljZSkge1xuXG4gICAgfVxuXG5cblxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICB0aGlzLnByb2plY3RTZXJ2aWNlLmdldFByb2plY3RzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sc1BvaW50cyA9IHRoaXMucG9pbnRzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlcnJvclswXSksXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRhdGEgbG9hZGVkIVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRQcm9qZWN0cygpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
