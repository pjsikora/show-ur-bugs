System.register(['rxjs/add/operator/map', "angular2/core", "./view.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, view_service_1;
    var ViewListComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (view_service_1_1) {
                view_service_1 = view_service_1_1;
            }],
        execute: function() {
            ViewListComponent = (function () {
                function ViewListComponent(viewService) {
                    this.viewService = viewService;
                }
                ViewListComponent.prototype.getViews = function () {
                    var _this = this;
                    this.viewService.getViews()
                        .subscribe(function (data) {
                        // console.log(data);
                        _this.views = data;
                        // this.lsPoints = this.points;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                        // console.log("Data loaded!")
                    });
                };
                ViewListComponent.prototype.ngOnInit = function () {
                    this.getViews();
                };
                ViewListComponent = __decorate([
                    core_1.Component({
                        // selector: 'my-app',
                        bindings: [view_service_1.ViewService],
                        template: "\n\t\t<table>\n            <thead>\n                <tr>\n                    <td>View name</td>\n                    <td>screenshotURL</td>\n                    <td>description</td>\n                    <td>projectID</td>\n                    <td>createDate</td>\n                    <td>createdBy</td>\n                    <td>isOpened</td>\n                    <td>isDeleted</td>\n                    <td></td>\n                    <td></td>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"#view of views\">\n                    <td><a href=\"/#/view/{{view._id}}\">{{view.name}}</a></td>\n                    <td>{{view.screenshotURL}}</td>\n                    <td>{{view.description}}</td>\n                    <td>{{view.projectID}}</td>\n                    <td>{{view.createDate}}</td>\n                    <td>{{view.createdBy}}</td>\n                    <td>{{view.isOpened}}</td>\n                    <td>{{view.isDeleted}}</td>\n                    \n                    <td><a href=\"\" class=\"button alert\">Delete</a></td>\n                <td><a href=\"\" class=\"button\">Edit</a></td>\n                </tr>\n            </tbody>\n        </table>\n\t"
                    }), 
                    __metadata('design:paramtypes', [view_service_1.ViewService])
                ], ViewListComponent);
                return ViewListComponent;
            })();
            exports_1("ViewListComponent", ViewListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvdmlldy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJWaWV3TGlzdENvbXBvbmVudCIsIlZpZXdMaXN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiVmlld0xpc3RDb21wb25lbnQuZ2V0Vmlld3MiLCJWaWV3TGlzdENvbXBvbmVudC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQXdDSUEsMkJBQW1CQSxXQUF1QkE7b0JBQXZCQyxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7Z0JBRTFDQSxDQUFDQTtnQkFFREQsb0NBQVFBLEdBQVJBO29CQUFBRSxpQkFhQ0E7b0JBWkdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLEVBQUVBO3lCQUN0QkEsU0FBU0EsQ0FDTkEsVUFBQUEsSUFBSUE7d0JBQ0FBLHFCQUFxQkE7d0JBQ3JCQSxLQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTt3QkFDbEJBLCtCQUErQkE7b0JBQ25DQSxDQUFDQSxFQUNEQSxVQUFBQSxLQUFLQSxJQUFJQSxPQUFBQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFuQ0EsQ0FBbUNBLEVBQzVDQTt3QkFDSUEsOEJBQThCQTtvQkFDbENBLENBQUNBLENBQ0pBLENBQUFBO2dCQUNUQSxDQUFDQTtnQkFHREYsb0NBQVFBLEdBQVJBO29CQUNJRyxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtnQkFDcEJBLENBQUNBO2dCQTlETEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsc0JBQXNCQTt3QkFDdEJBLFFBQVFBLEVBQUVBLENBQUNBLDBCQUFXQSxDQUFDQTt3QkFDdkJBLFFBQVFBLEVBQUVBLHFzQ0FnQ1pBO3FCQUNEQSxDQUFDQTs7c0NBMkJEQTtnQkFBREEsd0JBQUNBO1lBQURBLENBL0RBLEFBK0RDQSxJQUFBO1lBL0RELGlEQStEQyxDQUFBIiwiZmlsZSI6InZpZXcvdmlldy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuaW1wb3J0IHtWaWV3U2VydmljZX0gZnJvbSBcIi4vdmlldy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIC8vIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICBiaW5kaW5nczogW1ZpZXdTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZTogYFxuXHRcdDx0YWJsZT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5WaWV3IG5hbWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+c2NyZWVuc2hvdFVSTDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5kZXNjcmlwdGlvbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5wcm9qZWN0SUQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+Y3JlYXRlRGF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5jcmVhdGVkQnk8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+aXNPcGVuZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+aXNEZWxldGVkPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjdmlldyBvZiB2aWV3c1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIi8jL3ZpZXcve3t2aWV3Ll9pZH19XCI+e3t2aWV3Lm5hbWV9fTwvYT48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t2aWV3LnNjcmVlbnNob3RVUkx9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3ZpZXcuZGVzY3JpcHRpb259fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3ZpZXcucHJvamVjdElEfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t2aWV3LmNyZWF0ZURhdGV9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3ZpZXcuY3JlYXRlZEJ5fX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t2aWV3LmlzT3BlbmVkfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t2aWV3LmlzRGVsZXRlZH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwiXCIgY2xhc3M9XCJidXR0b24gYWxlcnRcIj5EZWxldGU8L2E+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIlwiIGNsYXNzPVwiYnV0dG9uXCI+RWRpdDwvYT48L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdMaXN0Q29tcG9uZW50IHtcbiAgICB2aWV3cztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3U2VydmljZTpWaWV3U2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0Vmlld3MoKSB7XG4gICAgICAgIHRoaXMudmlld1NlcnZpY2UuZ2V0Vmlld3MoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld3MgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxzUG9pbnRzID0gdGhpcy5wb2ludHM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJyArIGVycm9yWzBdKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGF0YSBsb2FkZWQhXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0Vmlld3MoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
