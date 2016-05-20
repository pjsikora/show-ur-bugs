System.register(['rxjs/add/operator/map', "angular2/core", 'angular2/router', '../project/index', "../view/view.service", "../user/user.service", "../screenshot/screenshot.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, index_1, view_service_1, user_service_1, screenshot_service_1;
    var ProjectSingleComponent;
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
            function (view_service_1_1) {
                view_service_1 = view_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (screenshot_service_1_1) {
                screenshot_service_1 = screenshot_service_1_1;
            }],
        execute: function() {
            ProjectSingleComponent = (function () {
                function ProjectSingleComponent(params, projectService, userService, viewService, screenshotService) {
                    this.projectService = projectService;
                    this.userService = userService;
                    this.viewService = viewService;
                    this.screenshotService = screenshotService;
                    this.isFormWorking = false;
                    this.isWinVisible = false;
                    this.viewsOfProject = new Array();
                    this.id = params.get('id');
                    console.log(this.id);
                }
                ProjectSingleComponent.prototype.getViewsOfProject = function (id) {
                    var _this = this;
                    this.viewService.getViewsOfProject(id)
                        .subscribe(function (data) {
                        _this.viewsOfProject = data;
                        console.log(data);
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                    });
                };
                ProjectSingleComponent.prototype.removeView = function () {
                };
                ProjectSingleComponent.prototype.hideAddViewWindow = function () {
                    this.isWinVisible = !this.isWinVisible;
                };
                ProjectSingleComponent.prototype.showAddViewWindow = function () {
                    this.isWinVisible = !this.isWinVisible;
                };
                ProjectSingleComponent.prototype.getUsers = function () {
                    var _this = this;
                    this.userService.getUsers()
                        .subscribe(function (data) {
                        _this.users = data;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                    });
                };
                ProjectSingleComponent.prototype.createView = function () {
                    var _this = this;
                    // var screenshotObj = {
                    //     url: this.newView.screenshotURL,
                    //     projectID: this.id,
                    //     file: 'sc'
                    // }
                    //
                    // this.screenshotService.make(screenshotObj).subscribe(
                    //     data => {
                    //         console.log(data);
                    //     },
                    //     error => console.error('Error: ' + error[0]),
                    //     () => {
                    //
                    //     }
                    // );
                    this.isFormWorking = true;
                    this.newView['projectID'] = this.id;
                    this.viewService.setView(this.newView).subscribe(function (data) {
                        _this.viewsOfProject.push(_this.newView);
                        _this.isWinVisible = !_this.isWinVisible;
                        _this.isFormWorking = false;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                    });
                };
                ProjectSingleComponent.prototype.getProjectData = function (id) {
                    var _this = this;
                    this.projectService.getProject(id)
                        .subscribe(function (data) {
                        _this.project = data;
                        _this.projectID = _this.project._id;
                        _this.projectName = _this.project.name;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                    });
                };
                ProjectSingleComponent.prototype.ngOnInit = function () {
                    this.newView = {
                        name: '',
                        description: '',
                        screenshotURL: ''
                    };
                    this.getProjectData(this.id);
                    this.getViewsOfProject(this.id);
                    this.getUsers();
                };
                ProjectSingleComponent = __decorate([
                    core_1.Component({
                        bindings: [index_1.ProjectService, view_service_1.ViewService, user_service_1.UserService, screenshot_service_1.ScreenshotService],
                        // directives: [CORE_DIRECTIVES],
                        styles: ["\n    .overlay { display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background: rgba(0,0,0,.5)}\n    .window { width: 400px; background: #fff; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; }\n    "],
                        template: "\n        <h2>Project: {{id}}</h2>\n        \n        <p>project: {{id}}</p>\n        <p>projectID: {{projectID}}</p>\n        <p>projectName: {{projectName}}</p>\n        <h4>Views</h4>\n        \n        <a class=\"button\" (click)=\"showAddViewWindow()\">Add View</a>\n         \n         <div *ngIf=\"viewsOfProject.length <= 0\">\n            <p>No views</p>\n         </div>\n            \n         <table *ngIf=\"viewsOfProject.length > 0\">\n            <thead>\n                <tr>\n                    <th>name</th>\n                    <th>isDeleted</th>\n                    <th></th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"#view of viewsOfProject\">\n                <td><a href=\"/#/view/{{view._id}}\">{{view.name}}</a></td>\n                <td><a href=\"/#/view/{{view._id}}\">{{view.isDeleted}}</a></td>\n                <td><a href=\"\" class=\"button alert\" (click)=\"deleteProject($event)\" data-id=\"\">Delete</a></td>\n                <td><a href=\"\" class=\"button\" (click)=\"editProject($event)\">Edit</a></td>\n            </tr>\n            </tbody>\n        </table>\n        <div class=\"overlay\" [style.display]=\"isWinVisible ? 'block' : 'none'\">\n            <div class=\"window\">\n                <h5>View details</h5>\n                <a (click)=\"hideAddViewWindow()\">Close</a>\n                <form #myForm=\"ngForm\" (ngSubmit)=\"createView()\" [style.display]=\"!isFormWorking ? 'block' : 'none'\">\n                          <label>View name\n                            <input type=\"text\" placeholder=\"View name\" ngControl=\"name\" [(ngModel)]=\"newView.name\">\n                          </label>\n                          <label>URL\n                            <input type=\"text\" placeholder=\"Screenshot URL\" ngControl=\"screenshot\" [(ngModel)]=\"newView.screenshotURL\">\n                          </label>\n                          <label>Description\n                            <textarea type=\"text\" placeholder=\"Description\" ngControl=\"description\" [(ngModel)]=\"newView.description\"></textarea>\n                          </label>\n                          \n                            <select name=\"\" id=\"\" [(ngModel)]=\"newView.createdBy\">\n                            <option *ngFor=\"#user of users\"  [value]=\"user._id\">{{user.login}}</option>\n                            </select>\n                          <button class=\"button\" type=\"submit\" >Add view</button>\n                    </form>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, index_1.ProjectService, user_service_1.UserService, view_service_1.ViewService, screenshot_service_1.ScreenshotService])
                ], ProjectSingleComponent);
                return ProjectSingleComponent;
            })();
            exports_1("ProjectSingleComponent", ProjectSingleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdC1zaW5nbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlByb2plY3RTaW5nbGVDb21wb25lbnQiLCJQcm9qZWN0U2luZ2xlQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiUHJvamVjdFNpbmdsZUNvbXBvbmVudC5nZXRWaWV3c09mUHJvamVjdCIsIlByb2plY3RTaW5nbGVDb21wb25lbnQucmVtb3ZlVmlldyIsIlByb2plY3RTaW5nbGVDb21wb25lbnQuaGlkZUFkZFZpZXdXaW5kb3ciLCJQcm9qZWN0U2luZ2xlQ29tcG9uZW50LnNob3dBZGRWaWV3V2luZG93IiwiUHJvamVjdFNpbmdsZUNvbXBvbmVudC5nZXRVc2VycyIsIlByb2plY3RTaW5nbGVDb21wb25lbnQuY3JlYXRlVmlldyIsIlByb2plY3RTaW5nbGVDb21wb25lbnQuZ2V0UHJvamVjdERhdGEiLCJQcm9qZWN0U2luZ2xlQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBOEVJQSxnQ0FBWUEsTUFBa0JBLEVBQ1hBLGNBQTZCQSxFQUM3QkEsV0FBdUJBLEVBQ3ZCQSxXQUF1QkEsRUFDdkJBLGlCQUFtQ0E7b0JBSG5DQyxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBZUE7b0JBQzdCQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7b0JBQ3ZCQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7b0JBQ3ZCQSxzQkFBaUJBLEdBQWpCQSxpQkFBaUJBLENBQWtCQTtvQkFYOUNBLGtCQUFhQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFDOUJBLGlCQUFZQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFJN0JBLG1CQUFjQSxHQUFTQSxJQUFJQSxLQUFLQSxFQUFFQSxDQUFDQTtvQkFRdkNBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUMz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Y0EsRUFBRUEsMEJBQVdBLEVBQUVBLDBCQUFXQSxFQUFFQSxzQ0FBaUJBLENBQUNBO3dCQUN2RUEsaUNBQWlDQTt3QkFDakNBLE1BQU1BLEVBQUVBLENBQUNBLDJRQUdSQSxDQUFDQTt3QkFDRkEsUUFBUUEsRUFBRUEsd2pGQXNEVEE7cUJBRUpBLENBQUNBOzsyQ0F1SERBO2dCQUFEQSw2QkFBQ0E7WUFBREEsQ0F0TEEsQUFzTENBLElBQUE7WUF0TEQsMkRBc0xDLENBQUEiLCJmaWxlIjoicHJvamVjdC9wcm9qZWN0LXNpbmdsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG4vLyBpbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL2FuZ3VsYXIyXCI7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge1Byb2plY3RTZXJ2aWNlfSBmcm9tICcuLi9wcm9qZWN0L2luZGV4JztcbmltcG9ydCB7Vmlld1NlcnZpY2V9IGZyb20gXCIuLi92aWV3L3ZpZXcuc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4uL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZpZXdNb2RlbH0gZnJvbSBcIi4uL3ZpZXcvdmlldy5tb2RlbFwiO1xuXG5pbXBvcnQge1NjcmVlbnNob3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2NyZWVuc2hvdC9zY3JlZW5zaG90LnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBiaW5kaW5nczogW1Byb2plY3RTZXJ2aWNlLCBWaWV3U2VydmljZSwgVXNlclNlcnZpY2UsIFNjcmVlbnNob3RTZXJ2aWNlXSxcbiAgICAvLyBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXSxcbiAgICBzdHlsZXM6IFtgXG4gICAgLm92ZXJsYXkgeyBkaXNwbGF5OiBub25lOyBwb3NpdGlvbjogZml4ZWQ7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHRvcDogMDsgbGVmdDogMDsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSl9XG4gICAgLndpbmRvdyB7IHdpZHRoOiA0MDBweDsgYmFja2dyb3VuZDogI2ZmZjsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDUwJTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgcGFkZGluZzogMjBweDsgfVxuICAgIGBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMj5Qcm9qZWN0OiB7e2lkfX08L2gyPlxuICAgICAgICBcbiAgICAgICAgPHA+cHJvamVjdDoge3tpZH19PC9wPlxuICAgICAgICA8cD5wcm9qZWN0SUQ6IHt7cHJvamVjdElEfX08L3A+XG4gICAgICAgIDxwPnByb2plY3ROYW1lOiB7e3Byb2plY3ROYW1lfX08L3A+XG4gICAgICAgIDxoND5WaWV3czwvaDQ+XG4gICAgICAgIFxuICAgICAgICA8YSBjbGFzcz1cImJ1dHRvblwiIChjbGljayk9XCJzaG93QWRkVmlld1dpbmRvdygpXCI+QWRkIFZpZXc8L2E+XG4gICAgICAgICBcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJ2aWV3c09mUHJvamVjdC5sZW5ndGggPD0gMFwiPlxuICAgICAgICAgICAgPHA+Tm8gdmlld3M8L3A+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgPHRhYmxlICpuZ0lmPVwidmlld3NPZlByb2plY3QubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPm5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+aXNEZWxldGVkPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiN2aWV3IG9mIHZpZXdzT2ZQcm9qZWN0XCI+XG4gICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCIvIy92aWV3L3t7dmlldy5faWR9fVwiPnt7dmlldy5uYW1lfX08L2E+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIi8jL3ZpZXcve3t2aWV3Ll9pZH19XCI+e3t2aWV3LmlzRGVsZXRlZH19PC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJcIiBjbGFzcz1cImJ1dHRvbiBhbGVydFwiIChjbGljayk9XCJkZWxldGVQcm9qZWN0KCRldmVudClcIiBkYXRhLWlkPVwiXCI+RGVsZXRlPC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJcIiBjbGFzcz1cImJ1dHRvblwiIChjbGljayk9XCJlZGl0UHJvamVjdCgkZXZlbnQpXCI+RWRpdDwvYT48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCIgW3N0eWxlLmRpc3BsYXldPVwiaXNXaW5WaXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmRvd1wiPlxuICAgICAgICAgICAgICAgIDxoNT5WaWV3IGRldGFpbHM8L2g1PlxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJoaWRlQWRkVmlld1dpbmRvdygpXCI+Q2xvc2U8L2E+XG4gICAgICAgICAgICAgICAgPGZvcm0gI215Rm9ybT1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJjcmVhdGVWaWV3KClcIiBbc3R5bGUuZGlzcGxheV09XCIhaXNGb3JtV29ya2luZyA/ICdibG9jaycgOiAnbm9uZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlZpZXcgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVmlldyBuYW1lXCIgbmdDb250cm9sPVwibmFtZVwiIFsobmdNb2RlbCldPVwibmV3Vmlldy5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5VUkxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNjcmVlbnNob3QgVVJMXCIgbmdDb250cm9sPVwic2NyZWVuc2hvdFwiIFsobmdNb2RlbCldPVwibmV3Vmlldy5zY3JlZW5zaG90VVJMXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBuZ0NvbnRyb2w9XCJkZXNjcmlwdGlvblwiIFsobmdNb2RlbCldPVwibmV3Vmlldy5kZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwiXCIgWyhuZ01vZGVsKV09XCJuZXdWaWV3LmNyZWF0ZWRCeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI3VzZXIgb2YgdXNlcnNcIiAgW3ZhbHVlXT1cInVzZXIuX2lkXCI+e3t1c2VyLmxvZ2lufX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiA+QWRkIHZpZXc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcblxufSlcblxuZXhwb3J0IGNsYXNzIFByb2plY3RTaW5nbGVDb21wb25lbnQge1xuICAgIHByaXZhdGUgaWQ6c3RyaW5nO1xuICAgIHByaXZhdGUgdXNlcnM7XG4gICAgcHJpdmF0ZSBwcm9qZWN0O1xuICAgIHByaXZhdGUgcHJvamVjdElEO1xuICAgIHByaXZhdGUgcHJvamVjdE5hbWU7XG4gICAgcHJpdmF0ZSBpc0Zvcm1Xb3JraW5nOkJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzV2luVmlzaWJsZTpCb29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBuZXdWaWV3OlZpZXdNb2RlbDtcbiAgICBuZ0Zvcm07XG5cbiAgICBwcml2YXRlIHZpZXdzT2ZQcm9qZWN0OkFycmF5ID0gbmV3IEFycmF5KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6Um91dGVQYXJhbXMsXG4gICAgICAgICAgICAgICAgcHVibGljIHByb2plY3RTZXJ2aWNlOlByb2plY3RTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHB1YmxpYyB1c2VyU2VydmljZTpVc2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwdWJsaWMgdmlld1NlcnZpY2U6Vmlld1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHVibGljIHNjcmVlbnNob3RTZXJ2aWNlOlNjcmVlbnNob3RTZXJ2aWNlKSB7XG5cbiAgICAgICAgdGhpcy5pZCA9IHBhcmFtcy5nZXQoJ2lkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Vmlld3NPZlByb2plY3QoaWQpIHtcbiAgICAgICAgdGhpcy52aWV3U2VydmljZS5nZXRWaWV3c09mUHJvamVjdChpZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld3NPZlByb2plY3QgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnICsgZXJyb3JbMF0pLFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlVmlldygpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGlkZUFkZFZpZXdXaW5kb3coKSB7XG4gICAgICAgIHRoaXMuaXNXaW5WaXNpYmxlID0gIXRoaXMuaXNXaW5WaXNpYmxlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0FkZFZpZXdXaW5kb3coKSB7XG4gICAgICAgIHRoaXMuaXNXaW5WaXNpYmxlID0gIXRoaXMuaXNXaW5WaXNpYmxlO1xuICAgIH1cblxuICAgIGdldFVzZXJzKCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXJzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlcnJvclswXSksXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVZpZXcoKSB7XG4gICAgICAgIC8vIHZhciBzY3JlZW5zaG90T2JqID0ge1xuICAgICAgICAvLyAgICAgdXJsOiB0aGlzLm5ld1ZpZXcuc2NyZWVuc2hvdFVSTCxcbiAgICAgICAgLy8gICAgIHByb2plY3RJRDogdGhpcy5pZCxcbiAgICAgICAgLy8gICAgIGZpbGU6ICdzYydcbiAgICAgICAgLy8gfVxuICAgICAgICAvL1xuICAgICAgICAvLyB0aGlzLnNjcmVlbnNob3RTZXJ2aWNlLm1ha2Uoc2NyZWVuc2hvdE9iaikuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICAgZGF0YSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlcnJvclswXSksXG4gICAgICAgIC8vICAgICAoKSA9PiB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICk7XG4gICAgICAgIHRoaXMuaXNGb3JtV29ya2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMubmV3Vmlld1sncHJvamVjdElEJ10gPSB0aGlzLmlkO1xuICAgICAgICB0aGlzLnZpZXdTZXJ2aWNlLnNldFZpZXcodGhpcy5uZXdWaWV3KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdzT2ZQcm9qZWN0LnB1c2godGhpcy5uZXdWaWV3KTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzV2luVmlzaWJsZSA9ICF0aGlzLmlzV2luVmlzaWJsZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRm9ybVdvcmtpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJyArIGVycm9yWzBdKSxcbiAgICAgICAgICAgICgpID0+IHtcblxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UHJvamVjdERhdGEoaWQpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0U2VydmljZS5nZXRQcm9qZWN0KGlkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0SUQgPSB0aGlzLnByb2plY3QuX2lkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gdGhpcy5wcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJyArIGVycm9yWzBdKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5ld1ZpZXcgPSA8Vmlld01vZGVsPntcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgc2NyZWVuc2hvdFVSTDogJydcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmdldFByb2plY3REYXRhKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmdldFZpZXdzT2ZQcm9qZWN0KHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmdldFVzZXJzKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
