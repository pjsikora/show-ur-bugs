System.register(["angular2/core", "./project.service", "../user/user.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, project_service_1, user_service_1;
    var ProjectFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            //
            ProjectFormComponent = (function () {
                function ProjectFormComponent(projectService, userService) {
                    this.projectService = projectService;
                    this.userService = userService;
                }
                //
                ProjectFormComponent.prototype.onSubmit = function () {
                    console.log('Submit');
                    console.log(this.newProject);
                    // this.newProject.createdBy = '5728620832237db8158e161e';
                    this.projectService.setProject(this.newProject).subscribe(function (data) {
                        console.log(data);
                        // this.lsPoints = this.points;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                        // console.log("Data loaded!")
                    });
                };
                ProjectFormComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this.userService.getUsers().subscribe(function (data) {
                        console.log(data);
                        _this.users = data;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                        // console.log("Data loaded!")
                    });
                };
                //
                ProjectFormComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                    this.newProject = {
                        name: '',
                        description: ''
                    };
                };
                ProjectFormComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<h2></h2>\n\t\t<form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"row\">\n            <div class=\"medium-push-3 medium-6 columns\">\n              <label>Project name\n                <input type=\"text\" placeholder=\"Project name\" ngControl=\"name\" [(ngModel)]=\"newProject.name\" required>\n              </label>\n              <label>Description\n                <textarea type=\"text\" placeholder=\"Description\" ngControl=\"description\" [(ngModel)]=\"newProject.description\" required></textarea>\n              </label>\n              \n              <select name=\"\" id=\"\" [(ngModel)]=\"newProject.createdBy\">\n                <option *ngFor=\"#user of users\"  [value]=\"user._id\">{{user.login}}</option>\n</select>\n              <button class=\"button\" type=\"submit\" >Add project</button>\n            </div>\n        </div>\n        </form>\n\t",
                        providers: [project_service_1.ProjectService, user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [project_service_1.ProjectService, user_service_1.UserService])
                ], ProjectFormComponent);
                return ProjectFormComponent;
            })();
            exports_1("ProjectFormComponent", ProjectFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJQcm9qZWN0Rm9ybUNvbXBvbmVudCIsIlByb2plY3RGb3JtQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiUHJvamVjdEZvcm1Db21wb25lbnQub25TdWJtaXQiLCJQcm9qZWN0Rm9ybUNvbXBvbmVudC5sb2FkVXNlcnMiLCJQcm9qZWN0Rm9ybUNvbXBvbmVudC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0EsRUFBRTtZQUNGO2dCQTRCSUEsOEJBQW1CQSxjQUE2QkEsRUFDN0JBLFdBQXVCQTtvQkFEdkJDLG1CQUFjQSxHQUFkQSxjQUFjQSxDQUFlQTtvQkFDN0JBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFZQTtnQkFDMUNBLENBQUNBO2dCQUVMRCxFQUFFQTtnQkFDRUEsdUNBQVFBLEdBQVJBO29CQUNJRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtvQkFDdEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO29CQUM3QkEsMERBQTBEQTtvQkFFMURBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLFNBQVNBLENBQ3JEQSxVQUFBQSxJQUFJQTt3QkFDQUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ2xCQSwrQkFBK0JBO29CQUNuQ0EsQ0FBQ0EsRUFDREEsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBbkNBLENBQW1DQSxFQUM1Q0E7d0JBQ0lBLDhCQUE4QkE7b0JBQ2xDQSxDQUFDQSxDQUNKQSxDQUFBQTtnQkFDTEEsQ0FBQ0E7Z0JBRURGLHdDQUFTQSxHQUFUQTtvQkFBQUcsaUJBV0NBO29CQVZHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUNqQ0EsVUFBQUEsSUFBSUE7d0JBQ0FBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNsQkEsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ3RCQSxDQUFDQSxFQUNEQSxVQUFBQSxLQUFLQSxJQUFJQSxPQUFBQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFuQ0EsQ0FBbUNBLEVBQzVDQTt3QkFDSUEsOEJBQThCQTtvQkFDbENBLENBQUNBLENBQ0pBLENBQUFBO2dCQUNMQSxDQUFDQTtnQkFFTEgsRUFBRUE7Z0JBQ0VBLHVDQUFRQSxHQUFSQTtvQkFDSUksSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7b0JBQ2pCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFpQkE7d0JBQzVCQSxJQUFJQSxFQUFFQSxFQUFFQTt3QkFDUkEsV0FBV0EsRUFBRUEsRUFBRUE7cUJBQ2xCQSxDQUFDQTtnQkFFTkEsQ0FBQ0E7Z0JBdkVMSjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSx1NEJBbUJaQTt3QkFDRUEsU0FBU0EsRUFBRUEsQ0FBQ0EsZ0NBQWNBLEVBQUVBLDBCQUFXQSxDQUFDQTtxQkFDM0NBLENBQUNBOzt5Q0FrRERBO2dCQUFEQSwyQkFBQ0E7WUFBREEsQ0F4RUEsQUF3RUNBLElBQUE7WUF4RUQsdURBd0VDLENBQUEiLCJmaWxlIjoicHJvamVjdC9wcm9qZWN0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuLy9cbi8vIGltcG9ydCB7Q29udHJvbEdyb3VwfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG4vLyBpbXBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG4vL1xuaW1wb3J0IHtQcm9qZWN0TW9kZWx9IGZyb20gXCIuL3Byb2plY3QubW9kZWxcIjtcbmltcG9ydCB7UHJvamVjdFNlcnZpY2V9IGZyb20gXCIuL3Byb2plY3Quc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG4vL1xuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IGBcblx0XHQ8aDI+PC9oMj5cblx0XHQ8Zm9ybSAjbXlGb3JtPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaXVtLXB1c2gtMyBtZWRpdW0tNiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5Qcm9qZWN0IG5hbWVcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgbmFtZVwiIG5nQ29udHJvbD1cIm5hbWVcIiBbKG5nTW9kZWwpXT1cIm5ld1Byb2plY3QubmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgbmdDb250cm9sPVwiZGVzY3JpcHRpb25cIiBbKG5nTW9kZWwpXT1cIm5ld1Byb2plY3QuZGVzY3JpcHRpb25cIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiXCIgaWQ9XCJcIiBbKG5nTW9kZWwpXT1cIm5ld1Byb2plY3QuY3JlYXRlZEJ5XCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCIjdXNlciBvZiB1c2Vyc1wiICBbdmFsdWVdPVwidXNlci5faWRcIj57e3VzZXIubG9naW59fTwvb3B0aW9uPlxuPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCIgPkFkZCBwcm9qZWN0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cblx0YCxcbiAgICBwcm92aWRlcnM6IFtQcm9qZWN0U2VydmljZSwgVXNlclNlcnZpY2VdXG59KVxuLy9cbmV4cG9ydCBjbGFzcyBQcm9qZWN0Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbmV3UHJvamVjdDpQcm9qZWN0TW9kZWw7XG4gICAgdXNlcnM7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvamVjdFNlcnZpY2U6UHJvamVjdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHVibGljIHVzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKSB7XG4gICAgfVxuXG4vL1xuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU3VibWl0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV3UHJvamVjdCk7XG4gICAgICAgIC8vIHRoaXMubmV3UHJvamVjdC5jcmVhdGVkQnkgPSAnNTcyODYyMDgzMjIzN2RiODE1OGUxNjFlJztcblxuICAgICAgICB0aGlzLnByb2plY3RTZXJ2aWNlLnNldFByb2plY3QodGhpcy5uZXdQcm9qZWN0KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxzUG9pbnRzID0gdGhpcy5wb2ludHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlcnJvclswXSksXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJEYXRhIGxvYWRlZCFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGxvYWRVc2VycygpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VycygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnICsgZXJyb3JbMF0pLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGF0YSBsb2FkZWQhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbi8vXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdCA9IDxQcm9qZWN0TW9kZWw+e1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgfTtcblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
