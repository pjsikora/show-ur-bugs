System.register(['rxjs/add/operator/map', "angular2/core", "./user.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1;
    var UserFormComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(userService) {
                    this.userService = userService;
                }
                UserFormComponent.prototype.onSubmit = function () {
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<h2></h2>\n\t\t<form (ngSubmit)=\"onSubmit()\">\n          <div class=\"row\">\n            <div class=\"medium-push-3 medium-6 columns\">\n              <label>User name\n                <input type=\"text\" placeholder=\"Login\" ngControl=\"viewName\" [(ngModel)]=\"user.name\">\n              </label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"medium-push-3 medium-6 columns\">\n              <label>Password\n                <input type=\"text\" placeholder=\"Password\" ngControl=\"viewDescription\" [(ngModel)]=\"user.password\">\n              </label>\n            </div>\n          </div>\n        </form>\n\t"
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserFormComponent);
                return UserFormComponent;
            })();
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJVc2VyRm9ybUNvbXBvbmVudCIsIlVzZXJGb3JtQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiVXNlckZvcm1Db21wb25lbnQub25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFzQklBLDJCQUFtQkEsV0FBdUJBO29CQUF2QkMsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQVlBO2dCQUUxQ0EsQ0FBQ0E7Z0JBQ0RELG9DQUFRQSxHQUFSQTtnQkFFQUUsQ0FBQ0E7Z0JBM0JMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxtcUJBa0JaQTtxQkFDREEsQ0FBQ0E7O3NDQVFEQTtnQkFBREEsd0JBQUNBO1lBQURBLENBNUJBLEFBNEJDQSxJQUFBO1lBNUJELGlEQTRCQyxDQUFBIiwiZmlsZSI6InVzZXIvdXNlci1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiBgXG5cdFx0PGgyPjwvaDI+XG5cdFx0PGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaXVtLXB1c2gtMyBtZWRpdW0tNiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5Vc2VyIG5hbWVcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxvZ2luXCIgbmdDb250cm9sPVwidmlld05hbWVcIiBbKG5nTW9kZWwpXT1cInVzZXIubmFtZVwiPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaXVtLXB1c2gtMyBtZWRpdW0tNiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBuZ0NvbnRyb2w9XCJ2aWV3RGVzY3JpcHRpb25cIiBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgVXNlckZvcm1Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VyU2VydmljZTpVc2VyU2VydmljZSkge1xuXG4gICAgfVxuICAgIG9uU3VibWl0KCkge1xuXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
