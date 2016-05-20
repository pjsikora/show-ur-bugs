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
    var ViewComponent;
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
            ViewComponent = (function () {
                function ViewComponent(userService) {
                    this.userService = userService;
                }
                ViewComponent.prototype.ngOnInit = function () {
                    // this.getPoints();
                };
                ViewComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t\n\t"
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ViewComponent);
                return ViewComponent;
            })();
            exports_1("ViewComponent", ViewComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci1yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiVmlld0NvbXBvbmVudCIsIlZpZXdDb21wb25lbnQuY29uc3RydWN0b3IiLCJWaWV3Q29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBVUlBLHVCQUFtQkEsV0FBdUJBO29CQUF2QkMsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQVlBO2dCQUUxQ0EsQ0FBQ0E7Z0JBRURELGdDQUFRQSxHQUFSQTtvQkFDSUUsb0JBQW9CQTtnQkFDeEJBLENBQUNBO2dCQWhCTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFFWkE7cUJBQ0RBLENBQUNBOztrQ0FhREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQWpCQSxBQWlCQ0EsSUFBQTtZQWpCRCx5Q0FpQkMsQ0FBQSIsImZpbGUiOiJ1c2VyL3VzZXItcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IGBcblx0XHRcblx0YFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3Q29tcG9uZW50IHtcbiAgICBsc1BvaW50cztcbiAgICBwb2ludHM7XG4gICAgZGluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VyU2VydmljZTpVc2VyU2VydmljZSkge1xuXG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyB0aGlzLmdldFBvaW50cygpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
