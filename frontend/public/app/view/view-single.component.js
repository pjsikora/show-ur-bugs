System.register(['rxjs/add/operator/map', "angular2/core", "./view.service", "angular2/router", "../point/point.service", "../httpreq.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, view_service_1, router_1, point_service_1, httpreq_service_1;
    var ViewComponent;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (view_service_1_1) {
                view_service_1 = view_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (point_service_1_1) {
                point_service_1 = point_service_1_1;
            },
            function (httpreq_service_1_1) {
                httpreq_service_1 = httpreq_service_1_1;
            }],
        execute: function() {
            ViewComponent = (function () {
                // newPoint: PointModel;
                function ViewComponent(params, viewService, pointService, httpReq) {
                    this.viewService = viewService;
                    this.pointService = pointService;
                    this.httpReq = httpReq;
                    this.isWinVisible = false;
                    this.id = params.get('id');
                    console.log(this.id);
                }
                ViewComponent.prototype.getPoints = function () {
                    var _this = this;
                    this.lsPoints = localStorage.getItem('view_points');
                    if (this.lsPoints != null) {
                        this.points = this.lsPoints;
                    }
                    // this.httpReq.makeRequest('points', '',  null)
                    this.pointService.getPointsOfView(this.id)
                        .subscribe(function (data) {
                        _this.points = data;
                        _this.lsPoints = _this.points;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () { });
                };
                ViewComponent.prototype.closeWindow = function (e) {
                    this.isWinVisible = !this.isWinVisible;
                    this.nameOfPoint = null;
                    this.descOfPoint = null;
                    this.newX = null;
                    this.newY = null;
                };
                ViewComponent.prototype.showWindow = function (e) {
                    this.isWinVisible = !this.isWinVisible;
                    this.newX = e.layerX;
                    this.newY = e.layerY;
                };
                ViewComponent.prototype.createPoint = function (e) {
                    var _this = this;
                    var point = {
                        x: this.newX,
                        y: this.newY,
                        viewID: this.id,
                        name: this.nameOfPoint,
                        description: this.descOfPoint,
                        createdBy: '5728620832237db8158e161e'
                    };
                    console.log(point);
                    // Push element to global array and draw it!
                    // this.points.push(point);
                    // console.log(point);
                    // Send to server
                    this.viewService.setPoint(point)
                        .subscribe(function (data) {
                        // TODO Synchronize with localstorage
                        console.log(data);
                        _this.points.push(point);
                        _this.closeWindow(null);
                    }, function (error) { return console.log('Error: ' + error[0]); }, function () { });
                };
                ViewComponent.prototype.deletePoint = function (event) {
                    var _this = this;
                    event.preventDefault();
                    var elId = event.target.dataset.id, idInArray = null, i = null;
                    this.viewService
                        .removePoint({ _id: event.target.dataset.id })
                        .subscribe(function (data) {
                        _this.points.forEach(function (el, index) {
                            if (el._id == event.target.dataset.id) {
                                i = index;
                            }
                        });
                        _this.points.splice(i, 1);
                        // TODO Synchronize with localstorage
                    }, function (error) { return console.log('Error: ' + error[0]); }, function () { });
                };
                // TODO Update method!!! Currently it only removes the element
                ViewComponent.prototype.updatePoint = function (event) {
                    var elId = event.target.dataset.id, idInArray = null;
                    // Check index of element
                    this.points.forEach(function (el, index) {
                        if (el._id == elId) {
                            idInArray = index;
                        }
                    });
                    // Remove element with index
                    this.points.splice(idInArray, 1);
                    this.viewService
                        .removePoint({ _id: event.target.dataset.id })
                        .subscribe(function (data) {
                        // TODO Synchronize with localstorage
                    }, function (error) { return console.log('Error: ' + error[0]); }, function () {
                    });
                };
                ViewComponent.prototype.rightMenuShowDetails = function () {
                };
                ViewComponent.prototype.ngOnInit = function () {
                    this.getPoints();
                };
                ViewComponent = __decorate([
                    core_1.Component({
                        bindings: [view_service_1.ViewService, point_service_1.PointService, httpreq_service_1.HTTPReq],
                        styles: ["\n        .rightMenu {position: fixed; right: 0; top: 0; overflow: scroll; background: #fff; border-left: 1px solid #000; padding: 10px; width: 200px; height: 100%}\n        .rightMenu .point__details.active { display: block; }\n\n        .screenshotView {position: relative; padding-right: 200px; }\n\n        .point { position: absolute; width: 10px; height: 10px; border: 1px solid #fff; background: black; border-radius: 50%;}\n\n        .window__overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,.5);}\n        .window__content { position: absolute; top: 50%; left: 50%; padding: 10px; transform: translate(-50%, -50%); width: 500px; height: 500px; background: #fff; border-radius: 10px; }\n    "],
                        template: "\n\t\t<div class=\"screenshotView\" style=\"position: relative;\" (click)=\"showWindow($event)\">\n\t\t\t<div *ngFor=\"#point of points\" class=\"point\" style=\" top: {{point.y}}; left: {{point.x}}\"></div>\n\t\t\t<img src=\"/img/ND.jpg\" alt=\"\">\n\t\t</div>\n\t\t<div class=\"rightMenu\">\n\t\t    <div *ngFor=\"#point of points\" style=\"\" (click)=\"rightMenuShowDetails()\">\n\t\t        <div class=\"point__catcher\">{{point.name}}</div>\n\t\t          <div class=\"point__details\">\n\t\t            <p>x:{{point.x}} y:{{point.y}}</p>\n\t\t            <p>description: {{point.description}}</p>\n\t\t            <p>author: {{point.createdBy}}</p>\n\t\t            <p>date: {{point.createDate}}</p>\n\t\t            <p>isOpened: {{point.isOpened}}</p>\n\t\t          </div>\n\t\t          <button class=\"button success\" (click)=\"updatePoint($event)\" attr.data-id=\"{{point._id}}\">Edit</button>\n\t\t          <button class=\"button alert\" (click)=\"deletePoint($event)\" attr.data-id=\"{{point._id}}\">Delete</button>\n\t\t          <button class=\"button\" (click)=\"closePoint($event)\" attr.data-id=\"{{point._id}}\">Close</button>\n\t\t    </div>\n        </div>\n        <div class=\"window__overlay\" [style.display]=\"isWinVisible ? 'block' : 'none'\">\n            <div class=\"window__content\">\n                <div class=\"window__close\" (click)=\"closeWindow($event)\">close</div>\n                <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"nameOfPoint\">\n                <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Description\" [(ngModel)]=\"descOfPoint\"></textarea>\n                <button (click)=\"createPoint()\" class=\"button\">Add point</button>\n            </div>\n        </div>\n        \n\t"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, view_service_1.ViewService, point_service_1.PointService, httpreq_service_1.HTTPReq])
                ], ViewComponent);
                return ViewComponent;
            })();
            exports_1("ViewComponent", ViewComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvdmlldy1zaW5nbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlZpZXdDb21wb25lbnQiLCJWaWV3Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiVmlld0NvbXBvbmVudC5nZXRQb2ludHMiLCJWaWV3Q29tcG9uZW50LmNsb3NlV2luZG93IiwiVmlld0NvbXBvbmVudC5zaG93V2luZG93IiwiVmlld0NvbXBvbmVudC5jcmVhdGVQb2ludCIsIlZpZXdDb21wb25lbnQuZGVsZXRlUG9pbnQiLCJWaWV3Q29tcG9uZW50LnVwZGF0ZVBvaW50IiwiVmlld0NvbXBvbmVudC5yaWdodE1lbnVTaG93RGV0YWlscyIsIlZpZXdDb21wb25lbnQubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkF1RElBLHdCQUF3QkE7Z0JBRXhCQSx1QkFBWUEsTUFBa0JBLEVBQ1hBLFdBQXVCQSxFQUN2QkEsWUFBeUJBLEVBQ3pCQSxPQUFlQTtvQkFGZkMsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQVlBO29CQUN2QkEsaUJBQVlBLEdBQVpBLFlBQVlBLENBQWFBO29CQUN6QkEsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7b0JBWGxDQSxpQkFBWUEsR0FBWUEsS0FBS0EsQ0FBQ0E7b0JBWTFCQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDM0JBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBRURELGlDQUFTQSxHQUFUQTtvQkFBQUUsaUJBaUJDQTtvQkFoQkdBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO29CQUVwREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsSUFB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QUFXQSxFQUFFQSw0QkFBWUEsRUFBRUEseUJBQU9BLENBQUNBO3dCQUM5Q0EsTUFBTUEsRUFBRUEsQ0FBQ0EsMHVCQVVSQSxDQUFDQTt3QkFDRkEsUUFBUUEsRUFBRUEsMnVEQTZCWkE7cUJBQ0RBLENBQUNBOztrQ0FrSkRBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0E3TEEsQUE2TENBLElBQUE7WUE3TEQseUNBNkxDLENBQUEiLCJmaWxlIjoidmlldy92aWV3LXNpbmdsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmltcG9ydCB7Vmlld1NlcnZpY2V9IGZyb20gXCIuL3ZpZXcuc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtQb2ludE1vZGVsfSBmcm9tIFwiLi4vcG9pbnQvcG9pbnQubW9kZWxcIjtcbmltcG9ydCB7UG9pbnRTZXJ2aWNlfSBmcm9tIFwiLi4vcG9pbnQvcG9pbnQuc2VydmljZVwiO1xuaW1wb3J0IHtIVFRQUmVxfSBmcm9tIFwiLi4vaHR0cHJlcS5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgYmluZGluZ3M6IFtWaWV3U2VydmljZSwgUG9pbnRTZXJ2aWNlLCBIVFRQUmVxXSxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5yaWdodE1lbnUge3Bvc2l0aW9uOiBmaXhlZDsgcmlnaHQ6IDA7IHRvcDogMDsgb3ZlcmZsb3c6IHNjcm9sbDsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwOyBwYWRkaW5nOiAxMHB4OyB3aWR0aDogMjAwcHg7IGhlaWdodDogMTAwJX1cbiAgICAgICAgLnJpZ2h0TWVudSAucG9pbnRfX2RldGFpbHMuYWN0aXZlIHsgZGlzcGxheTogYmxvY2s7IH1cblxuICAgICAgICAuc2NyZWVuc2hvdFZpZXcge3Bvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1yaWdodDogMjAwcHg7IH1cblxuICAgICAgICAucG9pbnQgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMHB4OyBoZWlnaHQ6IDEwcHg7IGJvcmRlcjogMXB4IHNvbGlkICNmZmY7IGJhY2tncm91bmQ6IGJsYWNrOyBib3JkZXItcmFkaXVzOiA1MCU7fVxuXG4gICAgICAgIC53aW5kb3dfX292ZXJsYXkgeyBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7fVxuICAgICAgICAud2luZG93X19jb250ZW50IHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDUwJTsgbGVmdDogNTAlOyBwYWRkaW5nOiAxMHB4OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgd2lkdGg6IDUwMHB4OyBoZWlnaHQ6IDUwMHB4OyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG4gICAgYF0sXG4gICAgdGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwic2NyZWVuc2hvdFZpZXdcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIiAoY2xpY2spPVwic2hvd1dpbmRvdygkZXZlbnQpXCI+XG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cIiNwb2ludCBvZiBwb2ludHNcIiBjbGFzcz1cInBvaW50XCIgc3R5bGU9XCIgdG9wOiB7e3BvaW50Lnl9fTsgbGVmdDoge3twb2ludC54fX1cIj48L2Rpdj5cblx0XHRcdDxpbWcgc3JjPVwiL2ltZy9ORC5qcGdcIiBhbHQ9XCJcIj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwicmlnaHRNZW51XCI+XG5cdFx0ICAgIDxkaXYgKm5nRm9yPVwiI3BvaW50IG9mIHBvaW50c1wiIHN0eWxlPVwiXCIgKGNsaWNrKT1cInJpZ2h0TWVudVNob3dEZXRhaWxzKClcIj5cblx0XHQgICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludF9fY2F0Y2hlclwiPnt7cG9pbnQubmFtZX19PC9kaXY+XG5cdFx0ICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb2ludF9fZGV0YWlsc1wiPlxuXHRcdCAgICAgICAgICAgIDxwPng6e3twb2ludC54fX0geTp7e3BvaW50Lnl9fTwvcD5cblx0XHQgICAgICAgICAgICA8cD5kZXNjcmlwdGlvbjoge3twb2ludC5kZXNjcmlwdGlvbn19PC9wPlxuXHRcdCAgICAgICAgICAgIDxwPmF1dGhvcjoge3twb2ludC5jcmVhdGVkQnl9fTwvcD5cblx0XHQgICAgICAgICAgICA8cD5kYXRlOiB7e3BvaW50LmNyZWF0ZURhdGV9fTwvcD5cblx0XHQgICAgICAgICAgICA8cD5pc09wZW5lZDoge3twb2ludC5pc09wZW5lZH19PC9wPlxuXHRcdCAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBzdWNjZXNzXCIgKGNsaWNrKT1cInVwZGF0ZVBvaW50KCRldmVudClcIiBhdHRyLmRhdGEtaWQ9XCJ7e3BvaW50Ll9pZH19XCI+RWRpdDwvYnV0dG9uPlxuXHRcdCAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGFsZXJ0XCIgKGNsaWNrKT1cImRlbGV0ZVBvaW50KCRldmVudClcIiBhdHRyLmRhdGEtaWQ9XCJ7e3BvaW50Ll9pZH19XCI+RGVsZXRlPC9idXR0b24+XG5cdFx0ICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiAoY2xpY2spPVwiY2xvc2VQb2ludCgkZXZlbnQpXCIgYXR0ci5kYXRhLWlkPVwie3twb2ludC5faWR9fVwiPkNsb3NlPC9idXR0b24+XG5cdFx0ICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndpbmRvd19fb3ZlcmxheVwiIFtzdHlsZS5kaXNwbGF5XT1cImlzV2luVmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kb3dfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2luZG93X19jbG9zZVwiIChjbGljayk9XCJjbG9zZVdpbmRvdygkZXZlbnQpXCI+Y2xvc2U8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBbKG5nTW9kZWwpXT1cIm5hbWVPZlBvaW50XCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJcIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBbKG5nTW9kZWwpXT1cImRlc2NPZlBvaW50XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjcmVhdGVQb2ludCgpXCIgY2xhc3M9XCJidXR0b25cIj5BZGQgcG9pbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG5cdGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBWaWV3Q29tcG9uZW50IHtcbiAgICBsc1BvaW50cztcbiAgICBwb2ludHM7XG4gICAgaWQ7XG4gICAgaXNXaW5WaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgbmFtZU9mUG9pbnQ7XG4gICAgZGVzY09mUG9pbnQ7XG4gICAgbmV3WDtcbiAgICBuZXdZO1xuICAgIFxuICAgIC8vIG5ld1BvaW50OiBQb2ludE1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zOlJvdXRlUGFyYW1zLFxuICAgICAgICAgICAgICAgIHB1YmxpYyB2aWV3U2VydmljZTpWaWV3U2VydmljZSxcbiAgICAgICAgICAgICAgICBwdWJsaWMgcG9pbnRTZXJ2aWNlOlBvaW50U2VydmljZSxcbiAgICAgICAgICAgICAgICBwdWJsaWMgaHR0cFJlcTpIVFRQUmVxKSB7XG4gICAgICAgIHRoaXMuaWQgPSBwYXJhbXMuZ2V0KCdpZCcpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBnZXRQb2ludHMoKSB7XG4gICAgICAgIHRoaXMubHNQb2ludHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmlld19wb2ludHMnKTtcblxuICAgICAgICBpZiAodGhpcy5sc1BvaW50cyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IHRoaXMubHNQb2ludHM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmh0dHBSZXEubWFrZVJlcXVlc3QoJ3BvaW50cycsICcnLCAgbnVsbClcbiAgICAgICAgdGhpcy5wb2ludFNlcnZpY2UuZ2V0UG9pbnRzT2ZWaWV3KHRoaXMuaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvaW50cyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubHNQb2ludHMgPSB0aGlzLnBvaW50cztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnICsgZXJyb3JbMF0pLFxuICAgICAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGNsb3NlV2luZG93KGUpOnZvaWQge1xuICAgICAgICB0aGlzLmlzV2luVmlzaWJsZSA9ICF0aGlzLmlzV2luVmlzaWJsZTtcbiAgICAgICAgdGhpcy5uYW1lT2ZQb2ludCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVzY09mUG9pbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm5ld1ggPSBudWxsO1xuICAgICAgICB0aGlzLm5ld1kgPSBudWxsO1xuICAgIH1cblxuICAgIHNob3dXaW5kb3coZSk6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNXaW5WaXNpYmxlID0gIXRoaXMuaXNXaW5WaXNpYmxlO1xuXG4gICAgICAgIHRoaXMubmV3WCA9IGUubGF5ZXJYO1xuICAgICAgICB0aGlzLm5ld1kgPSBlLmxheWVyWTtcbiAgICB9XG5cbiAgICBjcmVhdGVQb2ludChlKSB7XG4gICAgICAgIHZhciBwb2ludCA9IHtcbiAgICAgICAgICAgIHggOiB0aGlzLm5ld1gsXG4gICAgICAgICAgICB5OiB0aGlzLm5ld1ksXG4gICAgICAgICAgICB2aWV3SUQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWVPZlBvaW50LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY09mUG9pbnQsXG4gICAgICAgICAgICBjcmVhdGVkQnk6ICc1NzI4NjIwODMyMjM3ZGI4MTU4ZTE2MWUnXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhwb2ludCk7XG5cbiAgICAgICAgLy8gUHVzaCBlbGVtZW50IHRvIGdsb2JhbCBhcnJheSBhbmQgZHJhdyBpdCFcbiAgICAgICAgLy8gdGhpcy5wb2ludHMucHVzaChwb2ludCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBvaW50KTtcblxuICAgICAgICAvLyBTZW5kIHRvIHNlcnZlclxuICAgICAgICB0aGlzLnZpZXdTZXJ2aWNlLnNldFBvaW50KHBvaW50KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBTeW5jaHJvbml6ZSB3aXRoIGxvY2Fsc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludHMucHVzaChwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VXaW5kb3cobnVsbCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBlcnJvclswXSksXG4gICAgICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZGVsZXRlUG9pbnQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGVsSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5pZCxcbiAgICAgICAgICAgIGlkSW5BcnJheSA9IG51bGwsXG4gICAgICAgICAgICBpID0gbnVsbDtcblxuICAgICAgICB0aGlzLnZpZXdTZXJ2aWNlXG4gICAgICAgICAgICAucmVtb3ZlUG9pbnQoe19pZDogZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWR9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaChmdW5jdGlvbihlbCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5faWQgPT0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRzLnNwbGljZShpLCAxKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIFN5bmNocm9uaXplIHdpdGggbG9jYWxzdG9yYWdlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBlcnJvclswXSksXG4gICAgICAgICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVE9ETyBVcGRhdGUgbWV0aG9kISEhIEN1cnJlbnRseSBpdCBvbmx5IHJlbW92ZXMgdGhlIGVsZW1lbnRcbiAgICB1cGRhdGVQb2ludChldmVudCkge1xuICAgICAgICB2YXIgZWxJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkLFxuICAgICAgICAgICAgaWRJbkFycmF5ID0gbnVsbDtcblxuICAgICAgICAvLyBDaGVjayBpbmRleCBvZiBlbGVtZW50XG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGVsLl9pZCA9PSBlbElkKSB7XG4gICAgICAgICAgICAgICAgaWRJbkFycmF5ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlbW92ZSBlbGVtZW50IHdpdGggaW5kZXhcbiAgICAgICAgdGhpcy5wb2ludHMuc3BsaWNlKGlkSW5BcnJheSwgMSk7XG5cbiAgICAgICAgdGhpcy52aWV3U2VydmljZVxuICAgICAgICAgICAgLnJlbW92ZVBvaW50KHtfaWQ6IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gU3luY2hyb25pemUgd2l0aCBsb2NhbHN0b3JhZ2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJyArIGVycm9yWzBdKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIHJpZ2h0TWVudVNob3dEZXRhaWxzKCkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0UG9pbnRzKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
