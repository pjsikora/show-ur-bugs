System.register(['rxjs/add/operator/map', "angular2/core", "./point.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, point_service_1;
    var PointListComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (point_service_1_1) {
                point_service_1 = point_service_1_1;
            }],
        execute: function() {
            PointListComponent = (function () {
                function PointListComponent(pointService) {
                    this.pointService = pointService;
                }
                PointListComponent.prototype.getPoints = function () {
                    var _this = this;
                    this.pointService.getPoints()
                        .subscribe(function (data) {
                        // console.log(data);
                        _this.points = data;
                        // this.lsPoints = this.points;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                        // console.log("Data loaded!")
                    });
                };
                PointListComponent.prototype.removePoint = function (e) {
                    var _this = this;
                    e.preventDefault();
                    this.pointService.removePoint(e.currentTarget.dataset.id)
                        .subscribe(function (data) {
                        // console.log(data);
                        _this.points = data;
                        // this.lsPoints = this.points;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                        // console.log("Data loaded!")
                    });
                };
                PointListComponent.prototype.ngOnInit = function () {
                    this.getPoints();
                };
                PointListComponent = __decorate([
                    core_1.Component({
                        bindings: [point_service_1.PointService],
                        template: "\n\t\t<table>\n            <thead>\n                <tr>\n                    <td>name</td>\n                    <td>x</td>\n                    <td>y</td>\n                    <!--<td>projectID</td>-->\n                    \n                    <td>createDate</td>\n                    <td>createdBy</td>\n                    <!--<td>deletedDate</td>-->\n                    <td>isOpened</td>\n                    <td>isDeleted</td>\n                    <td></td>\n                    <td></td>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"#point of points\">\n                    <td>{{point.name}}</td>\n                    <td>{{point.x}}</td>\n                    <td>{{point.y}}</td>\n                    <!--<td>{{point.projectID}}</td>-->\n                    \n                    <td>{{point.createDate}}</td>\n                    <td>{{point.createdBy}}</td>\n                    <!--<td>{{point.deletedDate}}</td>-->\n                    <td>{{point.isOpened}}</td>\n                    <td>{{point.isDeleted}}</td>\n                    \n                    <td><a href=\"\" class=\"button alert\" (click)=\"removePoint($event)\" data-id=\"{{point._id}}\">Delete</a></td>\n                    <td><a href=\"\" class=\"button\">Edit</a></td>\n                </tr>\n            </tbody>\n        </table>\n\t"
                    }), 
                    __metadata('design:paramtypes', [point_service_1.PointService])
                ], PointListComponent);
                return PointListComponent;
            })();
            exports_1("PointListComponent", PointListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50L3BvaW50LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBvaW50TGlzdENvbXBvbmVudCIsIlBvaW50TGlzdENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlBvaW50TGlzdENvbXBvbmVudC5nZXRQb2ludHMiLCJQb2ludExpc3RDb21wb25lbnQucmVtb3ZlUG9pbnQiLCJQb2ludExpc3RDb21wb25lbnQubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkEyQ0lBLDRCQUFtQkEsWUFBeUJBO29CQUF6QkMsaUJBQVlBLEdBQVpBLFlBQVlBLENBQWFBO2dCQUU1Q0EsQ0FBQ0E7Z0JBRURELHNDQUFTQSxHQUFUQTtvQkFBQUUsaUJBYUNBO29CQVpHQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxTQUFTQSxFQUFFQTt5QkFDeEJBLFNBQVNBLENBQ05BLFVBQUFBLElBQUlBO3dCQUNBQSxxQkFBcUJBO3dCQUNyQkEsS0FBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7d0JBQ25CQSwrQkFBK0JBO29CQUNuQ0EsQ0FBQ0EsRUFDREEsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBbkNBLENBQW1DQSxFQUM1Q0E7d0JBQ0lBLDhCQUE4QkE7b0JBQ2xDQSxDQUFDQSxDQUNKQSxDQUFBQTtnQkFDVEEsQ0FBQ0E7Z0JBRURGLHdDQUFXQSxHQUFYQSxVQUFZQSxDQUFDQTtvQkFBYkcsaUJBY0NBO29CQWJHQSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtvQkFDbkJBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBO3lCQUNwREEsU0FBU0EsQ0FDTkEsVUFBQUEsSUFBSUE7d0JBQ0FBLHFCQUFxQkE7d0JBQ3JCQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTt3QkFDbkJBLCtCQUErQkE7b0JBQ25DQSxDQUFDQSxFQUNEQSxVQUFBQSxLQUFLQSxJQUFJQSxPQUFBQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFuQ0EsQ0FBbUNBLEVBQzVDQTt3QkFDSUEsOEJBQThCQTtvQkFDbENBLENBQUNBLENBQ0pBLENBQUFBO2dCQUNUQSxDQUFDQTtnQkFJREgscUNBQVFBLEdBQVJBO29CQUNJSSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQTtnQkFDckJBLENBQUNBO2dCQWxGTEo7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsQ0FBQ0EsNEJBQVlBLENBQUNBO3dCQUN4QkEsUUFBUUEsRUFBRUEsNjFDQW9DWkE7cUJBQ0RBLENBQUNBOzt1Q0E0Q0RBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0FuRkEsQUFtRkNBLElBQUE7WUFuRkQsbURBbUZDLENBQUEiLCJmaWxlIjoicG9pbnQvcG9pbnQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmltcG9ydCB7UG9pbnRTZXJ2aWNlfSBmcm9tIFwiLi9wb2ludC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIGJpbmRpbmdzOiBbUG9pbnRTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZTogYFxuXHRcdDx0YWJsZT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5uYW1lPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPng8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+eTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08dGQ+cHJvamVjdElEPC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5jcmVhdGVEYXRlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPmNyZWF0ZWRCeTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08dGQ+ZGVsZXRlZERhdGU8L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+aXNPcGVuZWQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+aXNEZWxldGVkPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjcG9pbnQgb2YgcG9pbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3BvaW50Lm5hbWV9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3BvaW50Lnh9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3BvaW50Lnl9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08dGQ+e3twb2ludC5wcm9qZWN0SUR9fTwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3twb2ludC5jcmVhdGVEYXRlfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3twb2ludC5jcmVhdGVkQnl9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08dGQ+e3twb2ludC5kZWxldGVkRGF0ZX19PC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7cG9pbnQuaXNPcGVuZWR9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3BvaW50LmlzRGVsZXRlZH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwiXCIgY2xhc3M9XCJidXR0b24gYWxlcnRcIiAoY2xpY2spPVwicmVtb3ZlUG9pbnQoJGV2ZW50KVwiIGRhdGEtaWQ9XCJ7e3BvaW50Ll9pZH19XCI+RGVsZXRlPC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwiXCIgY2xhc3M9XCJidXR0b25cIj5FZGl0PC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgUG9pbnRMaXN0Q29tcG9uZW50IHtcbiAgICBwb2ludHM7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcG9pbnRTZXJ2aWNlOlBvaW50U2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0UG9pbnRzKCkge1xuICAgICAgICB0aGlzLnBvaW50U2VydmljZS5nZXRQb2ludHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sc1BvaW50cyA9IHRoaXMucG9pbnRzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlcnJvclswXSksXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRhdGEgbG9hZGVkIVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICByZW1vdmVQb2ludChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wb2ludFNlcnZpY2UucmVtb3ZlUG9pbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxzUG9pbnRzID0gdGhpcy5wb2ludHM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJyArIGVycm9yWzBdKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGF0YSBsb2FkZWQhXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cblxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRQb2ludHMoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
