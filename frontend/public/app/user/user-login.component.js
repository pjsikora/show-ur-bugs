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
    var UserLoginComponent;
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
            UserLoginComponent = (function () {
                function UserLoginComponent(userService) {
                    this.userService = userService;
                }
                UserLoginComponent.prototype.login = function () {
                    var _this = this;
                    this.userService.getUsers()
                        .subscribe(function (data) {
                        _this.users = data;
                        // this.lsPoints = this.points;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                        // console.log("Data loaded!")
                    });
                };
                UserLoginComponent.prototype.ngOnInit = function () {
                };
                UserLoginComponent = __decorate([
                    core_1.Component({
                        bindings: [user_service_1.UserService],
                        template: "\n        <form>\n        <div class=\"row\">\n            <div class=\"medium-push-3 medium-6 columns\">\n              <label>Login\n                <input type=\"text\" placeholder=\"Login\" ngControl=\"userName\" [(ngModel)]=\"user.name\">\n              </label>\n              <label>Password\n                <input type=\"text\" placeholder=\"Password\" ngControl=\"userPassword\" [(ngModel)]=\"user.password\">\n              </label>\n            </div>\n        </div>\n        </form>\n\t\t\n\t"
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserLoginComponent);
                return UserLoginComponent;
            })();
            exports_1("UserLoginComponent", UserLoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci1sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiVXNlckxvZ2luQ29tcG9uZW50IiwiVXNlckxvZ2luQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiVXNlckxvZ2luQ29tcG9uZW50LmxvZ2luIiwiVXNlckxvZ2luQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBcUJJQSw0QkFBbUJBLFdBQXVCQTtvQkFBdkJDLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFZQTtnQkFFMUNBLENBQUNBO2dCQUVERCxrQ0FBS0EsR0FBTEE7b0JBQUFFLGlCQVlDQTtvQkFYR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsRUFBRUE7eUJBQ3RCQSxTQUFTQSxDQUNOQSxVQUFBQSxJQUFJQTt3QkFDQUEsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7d0JBQ2xCQSwrQkFBK0JBO29CQUNuQ0EsQ0FBQ0EsRUFDREEsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBbkNBLENBQW1DQSxFQUM1Q0E7d0JBQ0lBLDhCQUE4QkE7b0JBQ2xDQSxDQUFDQSxDQUNKQSxDQUFBQTtnQkFDVEEsQ0FBQ0E7Z0JBR0RGLHFDQUFRQSxHQUFSQTtnQkFDQUcsQ0FBQ0E7Z0JBekNMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxDQUFDQSwwQkFBV0EsQ0FBQ0E7d0JBQ3ZCQSxRQUFRQSxFQUFFQSw0ZkFjWkE7cUJBQ0RBLENBQUNBOzt1Q0F5QkRBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0ExQ0EsQUEwQ0NBLElBQUE7WUExQ0QsbURBMENDLENBQUEiLCJmaWxlIjoidXNlci91c2VyLWxvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIGJpbmRpbmdzOiBbVXNlclNlcnZpY2VdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxmb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaXVtLXB1c2gtMyBtZWRpdW0tNiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5Mb2dpblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTG9naW5cIiBuZ0NvbnRyb2w9XCJ1c2VyTmFtZVwiIFsobmdNb2RlbCldPVwidXNlci5uYW1lXCI+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBuZ0NvbnRyb2w9XCJ1c2VyUGFzc3dvcmRcIiBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuXHRcdFxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJMb2dpbkNvbXBvbmVudCB7XG4gICAgdXNlcnM7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlclNlcnZpY2U6VXNlclNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXJzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxzUG9pbnRzID0gdGhpcy5wb2ludHM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJyArIGVycm9yWzBdKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGF0YSBsb2FkZWQhXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
