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
    var UserListComponent;
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
            UserListComponent = (function () {
                function UserListComponent(userService) {
                    this.userService = userService;
                }
                UserListComponent.prototype.getViews = function () {
                    var _this = this;
                    this.userService.getUsers()
                        .subscribe(function (data) {
                        _this.users = data;
                        // this.lsPoints = this.points;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                        // console.log("Data loaded!")
                    });
                };
                UserListComponent.prototype.ngOnInit = function () {
                    this.getViews();
                };
                UserListComponent = __decorate([
                    core_1.Component({
                        // selector: 'my-app',
                        bindings: [user_service_1.UserService],
                        template: "\n\t\t<table>\n            <thead>\n                <tr>\n                    <td>_id</td>\n                    <td>login</td>\n                    <td>email</td>\n                    \n                    <td>password</td>\n                    <td>createDate</td>\n                    <td>isDeleted</td>\n                    <td>deleteDate</td>\n                    \n                    <td></td>\n                    <td></td>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"#user of users\">\n                    <td>{{user._id}}</td>\n                    <td>{{user.login}}</td>\n                    <td>{{user.email}}</td>\n                    \n                    <td>{{user.password}}</td>\n                    <td>{{user.createDate}}</td>\n                    <td>{{user.isDeleted}}</td>\n                    <td>{{user.deleteDate}}</td>\n                    \n                    \n                <td><a href=\"\" class=\"button alert\">Delete</a></td>\n                <td><a href=\"\" class=\"button\">Edit</a></td>\n                </tr>\n            </tbody>\n        </table>\n\t"
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserListComponent);
                return UserListComponent;
            })();
            exports_1("UserListComponent", UserListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJVc2VyTGlzdENvbXBvbmVudCIsIlVzZXJMaXN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiVXNlckxpc3RDb21wb25lbnQuZ2V0Vmlld3MiLCJVc2VyTGlzdENvbXBvbmVudC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQTBDSUEsMkJBQW1CQSxXQUF1QkE7b0JBQXZCQyxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7Z0JBRTFDQSxDQUFDQTtnQkFFREQsb0NBQVFBLEdBQVJBO29CQUFBRSxpQkFZQ0E7b0JBWEdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLEVBQUVBO3lCQUN0QkEsU0FBU0EsQ0FDTkEsVUFBQUEsSUFBSUE7d0JBQ0FBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO3dCQUNsQkEsK0JBQStCQTtvQkFDbkNBLENBQUNBLEVBQ0RBLFVBQUFBLEtBQUtBLElBQUlBLE9BQUFBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEVBQW5DQSxDQUFtQ0EsRUFDNUNBO3dCQUNJQSw4QkFBOEJBO29CQUNsQ0EsQ0FBQ0EsQ0FDSkEsQ0FBQUE7Z0JBQ1RBLENBQUNBO2dCQUdERixvQ0FBUUEsR0FBUkE7b0JBQ0lHLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO2dCQUNwQkEsQ0FBQ0E7Z0JBL0RMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxzQkFBc0JBO3dCQUN0QkEsUUFBUUEsRUFBRUEsQ0FBQ0EsMEJBQVdBLENBQUNBO3dCQUN2QkEsUUFBUUEsRUFBRUEsMG5DQWtDWkE7cUJBQ0RBLENBQUNBOztzQ0EwQkRBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0FoRUEsQUFnRUNBLElBQUE7WUFoRUQsaURBZ0VDLENBQUEiLCJmaWxlIjoidXNlci91c2VyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgLy8gc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIGJpbmRpbmdzOiBbVXNlclNlcnZpY2VdLFxuICAgIHRlbXBsYXRlOiBgXG5cdFx0PHRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPl9pZDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5sb2dpbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5lbWFpbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8dGQ+cGFzc3dvcmQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+Y3JlYXRlRGF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5pc0RlbGV0ZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+ZGVsZXRlRGF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiN1c2VyIG9mIHVzZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3VzZXIuX2lkfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t1c2VyLmxvZ2lufX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t1c2VyLmVtYWlsfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7dXNlci5wYXNzd29yZH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7dXNlci5jcmVhdGVEYXRlfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t1c2VyLmlzRGVsZXRlZH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7dXNlci5kZWxldGVEYXRlfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJcIiBjbGFzcz1cImJ1dHRvbiBhbGVydFwiPkRlbGV0ZTwvYT48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwiXCIgY2xhc3M9XCJidXR0b25cIj5FZGl0PC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgVXNlckxpc3RDb21wb25lbnQge1xuICAgIHVzZXJzO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHVzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBnZXRWaWV3cygpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VycygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sc1BvaW50cyA9IHRoaXMucG9pbnRzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlcnJvclswXSksXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRhdGEgbG9hZGVkIVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFZpZXdzKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
