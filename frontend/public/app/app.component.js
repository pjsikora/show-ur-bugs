System.register(['rxjs/add/operator/map', "angular2/core", "angular2/router", "./app.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_service_1;
    var AppComponent, AppProject, AppView;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(appService) {
                    this.appService = appService;
                }
                AppComponent.prototype.getPoints = function () {
                    var _this = this;
                    this.lsPoints = localStorage.getItem('view_points');
                    if (this.lsPoints != null) {
                        this.points = this.lsPoints;
                    }
                    this.appService.getPoints()
                        .subscribe(function (data) {
                        // console.log(data);
                        _this.points = data;
                        _this.lsPoints = _this.points;
                    }, function (error) { return console.error('Error: ' + error[0]); }, function () {
                        // console.log("Data loaded!")
                    });
                };
                AppComponent.prototype.createPoint = function (e) {
                    // Create point
                    var point = {
                        name: 'Added',
                        x: e.layerX,
                        y: e.layerY,
                        isOpened: true
                    };
                    // Push element to global array and draw it!
                    this.points.push(point);
                    // Send to server
                    this.appService.setPoint(point)
                        .subscribe(function (data) {
                        // TODO Synchronize with localstorage
                    }, function (error) { return console.log('Error: ' + error[0]); }, function () {
                    });
                };
                AppComponent.prototype.deletePoint = function (event) {
                    var elId = event.target.dataset.id, idInArray = null;
                    // Check index of element
                    this.points.forEach(function (el, index) {
                        if (el._id == elId) {
                            idInArray = index;
                        }
                    });
                    // Remove element with index
                    this.points.splice(idInArray, 1);
                    this
                        .appService
                        .removePoint({ _id: event.target.dataset.id })
                        .subscribe(function (data) {
                        // TODO Synchronize with localstorage
                    }, function (error) { return console.log('Error: ' + error[0]); }, function () {
                    });
                };
                // TODO Update method!!! Currently it only removes the element
                AppComponent.prototype.updatePoint = function (event) {
                    var elId = event.target.dataset.id, idInArray = null;
                    // Check index of element
                    this.points.forEach(function (el, index) {
                        if (el._id == elId) {
                            idInArray = index;
                        }
                    });
                    // Remove element with index
                    this.points.splice(idInArray, 1);
                    // console.log(this.points);
                    this
                        .appService
                        .removePoint({ _id: event.target.dataset.id })
                        .subscribe(function (data) {
                        // TODO Synchronize with localstorage
                    }, function (error) { return console.log('Error: ' + error[0]); }, function () {
                    });
                };
                AppComponent.prototype.updatePoint = function (event) {
                    console.log(event.target);
                };
                AppComponent.prototype.rightMenuShowDetails = function () {
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getPoints();
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'AppComponent', component: AppComponent },
                        { path: '/project', name: 'AppProjects', component: AppProject },
                        { path: '/view', name: 'AppViews', component: AppView },
                    ]),
                    core_1.Component({
                        // selector: 'my-app',
                        styles: ["\n        .rightMenu {position: fixed; right: 0; top: 0; overflow: scroll; background: #fff; border-left: 1px solid #000; padding: 10px; width: 200px; height: 100%}\n        // .rightMenu .point__details { display: none; }\n        .rightMenu .point__details.active { display: block; }\n        \n        .screenshotView {position: relative; padding-right: 200px; }\n        \n        .point { position: absolute; width: 10px; height: 10px; border: 1px solid #fff; background: black; border-radius: 50%;}\n        \n        // .window__overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,.5);}\n        // .window__content { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 500px; height: 500px; background: #fff; }\n        \n    "],
                        template: "\n\t\t<div class=\"screenshotView\" style=\"position: relative;\" (click)=\"createPoint($event)\">\n\t\t\t<div *ngFor=\"#point of points\" class=\"point\" style=\" top: {{point.y}}; left: {{point.x}}\" (click)=\"showDetails()\"></div>\n\t\t\t<img src=\"/img/ND.jpg\" alt=\"\">\n\t\t</div>\n\t\t<div class=\"rightMenu\">\n\t\t    <div *ngFor=\"#point of points\" style=\"\" (click)=\"rightMenuShowDetails()\">\n\t\t        <div class=\"point__catcher\">{{point.name}}</div>\n\t\t          <div class=\"point__details\">\n\t\t            <p>x:{{point.x}} y:{{point.y}}</p>\n\t\t            <p>description: {{point.description}}</p>\n\t\t            <p>author: {{point.author}}</p>\n\t\t            <p>date: {{point.date}}</p>\n\t\t            <p>isOpened: {{point.isOpened}}</p>\n\t\t            <p>isRemoved: {{point.isRemoved}}</p>\n\t\t          </div>\n\t\t          <button (click)=\"updatePoint($event)\" attr.data-id=\"{{point._id}}\">Edit</button>\n\t\t          <button (click)=\"deletePoint($event)\" attr.data-id=\"{{point._id}}\">Delete</button>\n\t\t          <button (click)=\"closePoint($event)\" attr.data-id=\"{{point._id}}\">Close</button>\n\t\t    </div>\n        </div>\n        <div class=\"window__overlay\">\n            <div class=\"window__content\">\n                <div class=\"window__close\"></div>\n            </div>\n        </div>    \n\t"
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            AppProject = (function () {
                function AppProject(appService) {
                    this.appService = appService;
                    console.log('Route: Project');
                }
                AppProject = __decorate([
                    core_1.Component({
                        template: "\n\t\t<h1>Project</h1>\n\t"
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService])
                ], AppProject);
                return AppProject;
            })();
            exports_1("AppProject", AppProject);
            AppView = (function () {
                function AppView(appService) {
                    this.appService = appService;
                    console.log('Route: View');
                }
                AppView = __decorate([
                    core_1.Component({
                        template: "\n\t\t<h1>View</h1>\n\t"
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService])
                ], AppView);
                return AppView;
            })();
            exports_1("AppView", AppView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50LmdldFBvaW50cyIsIkFwcENvbXBvbmVudC5jcmVhdGVQb2ludCIsIkFwcENvbXBvbmVudC5kZWxldGVQb2ludCIsIkFwcENvbXBvbmVudC51cGRhdGVQb2ludCIsIkFwcENvbXBvbmVudC5yaWdodE1lbnVTaG93RGV0YWlscyIsIkFwcENvbXBvbmVudC5uZ09uSW5pdCIsIkFwcFByb2plY3QiLCJBcHBQcm9qZWN0LmNvbnN0cnVjdG9yIiwiQXBwVmlldyIsIkFwcFZpZXcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkF5RElBLHNCQUFtQkEsVUFBcUJBO29CQUFyQkMsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBV0E7Z0JBRXhDQSxDQUFDQTtnQkFFREQsZ0NBQVNBLEdBQVRBO29CQUFBRSxpQkFtQkNBO29CQWxCR0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7b0JBRXBEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDeEJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO29CQUNoQ0EsQ0FBQ0E7b0JBRURBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLFNBQVNBLEVBQUVBO3lCQUN0QkEsU0FBU0EsQ0FDTkEsVUFBQUEsSUFBSUE7d0JBQ0FBLHFCQUFxQkE7d0JBQ3JCQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTt3QkFDbkJBLEtBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUlBLENBQUNBLE1BQU1BLENBQUNBO29CQUNoQ0EsQ0FBQ0Es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QVVBLEVBQUNBO3dCQUM3REEsRUFBQ0EsSUFBSUEsRUFBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsU0FBU0EsRUFBRUEsT0FBT0EsRUFBQ0E7cUJBR3ZEQSxDQUFDQTtvQkFHREEsZ0JBQVNBLENBQUNBO3dCQUNQQSxzQkFBc0JBO3dCQUN0QkEsTUFBTUEsRUFBRUEsQ0FBQ0Esd3lCQVlSQSxDQUFDQTt3QkFDRkEsUUFBUUEsRUFBRUEsNDFDQTBCWkE7cUJBQ0RBLENBQUNBOztpQ0E2SERBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FoTEEsQUFnTENBLElBQUE7WUFoTEQsdUNBZ0xDLENBQUE7WUFFRDtnQkFNSVEsb0JBQW1CQSxVQUFxQkE7b0JBQXJCQyxlQUFVQSxHQUFWQSxVQUFVQSxDQUFXQTtvQkFDcENBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQTtnQkFSTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsNEJBRVpBO3FCQUNEQSxDQUFDQTs7K0JBS0RBO2dCQUFEQSxpQkFBQ0E7WUFBREEsQ0FUQSxBQVNDQSxJQUFBO1lBVEQsbUNBU0MsQ0FBQTtZQUNEO2dCQU1JRSxpQkFBbUJBLFVBQXFCQTtvQkFBckJDLGVBQVVBLEdBQVZBLFVBQVVBLENBQVdBO29CQUNwQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7Z0JBRS9CQSxDQUFDQTtnQkFUTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEseUJBRVpBO3FCQUNEQSxDQUFDQTs7NEJBTURBO2dCQUFEQSxjQUFDQTtZQUFEQSxDQVZBLEFBVUNBLElBQUE7WUFWRCw2QkFVQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5pbXBvcnQge0FwcFNlcnZpY2V9IGZyb20gXCIuL2FwcC5zZXJ2aWNlXCI7XG5cblxuXG5AUm91dGVDb25maWcoW1xuICAgICAgICB7cGF0aDonLycsIG5hbWU6ICdBcHBDb21wb25lbnQnLCBjb21wb25lbnQ6IEFwcENvbXBvbmVudH0sXG4gICAge3BhdGg6Jy9wcm9qZWN0JywgbmFtZTogJ0FwcFByb2plY3RzJywgY29tcG9uZW50OiBBcHBQcm9qZWN0fSxcbiAgICB7cGF0aDonL3ZpZXcnLCBuYW1lOiAnQXBwVmlld3MnLCBjb21wb25lbnQ6IEFwcFZpZXd9LFxuICAgIC8vIHtwYXRoOicvaGVyb2VzJywgICAgICAgIG5hbWU6ICdIZXJvZXMnLCAgICAgICBjb21wb25lbnQ6IEhlcm9MaXN0Q29tcG9uZW50fSxcbiAgICAvLyB7cGF0aDonL2hlcm8vOmlkJywgICAgICBuYW1lOiAnSGVyb0RldGFpbCcsICAgY29tcG9uZW50OiBIZXJvRGV0YWlsQ29tcG9uZW50fVxuXSlcbi8vPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJuZXdQZXJzb24ubmFtZVwiIChrZXl1cC5lbnRlcik9XCJzYXZlUGVvcGxlKClcIj5cbi8vPGJ1dHRvbiAoY2xpY2spPVwic2F2ZVBlb3BsZSgpXCI+U2F2ZSBwZW9wbGU8L2J1dHRvbj5cbkBDb21wb25lbnQoe1xuICAgIC8vIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5yaWdodE1lbnUge3Bvc2l0aW9uOiBmaXhlZDsgcmlnaHQ6IDA7IHRvcDogMDsgb3ZlcmZsb3c6IHNjcm9sbDsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwOyBwYWRkaW5nOiAxMHB4OyB3aWR0aDogMjAwcHg7IGhlaWdodDogMTAwJX1cbiAgICAgICAgLy8gLnJpZ2h0TWVudSAucG9pbnRfX2RldGFpbHMgeyBkaXNwbGF5OiBub25lOyB9XG4gICAgICAgIC5yaWdodE1lbnUgLnBvaW50X19kZXRhaWxzLmFjdGl2ZSB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgICAgIFxuICAgICAgICAuc2NyZWVuc2hvdFZpZXcge3Bvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1yaWdodDogMjAwcHg7IH1cbiAgICAgICAgXG4gICAgICAgIC5wb2ludCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwcHg7IGhlaWdodDogMTBweDsgYm9yZGVyOiAxcHggc29saWQgI2ZmZjsgYmFja2dyb3VuZDogYmxhY2s7IGJvcmRlci1yYWRpdXM6IDUwJTt9XG4gICAgICAgIFxuICAgICAgICAvLyAud2luZG93X19vdmVybGF5IHsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO31cbiAgICAgICAgLy8gLndpbmRvd19fY29udGVudCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IHdpZHRoOiA1MDBweDsgaGVpZ2h0OiA1MDBweDsgYmFja2dyb3VuZDogI2ZmZjsgfVxuICAgICAgICBcbiAgICBgXSxcbiAgICB0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgY2xhc3M9XCJzY3JlZW5zaG90Vmlld1wiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiIChjbGljayk9XCJjcmVhdGVQb2ludCgkZXZlbnQpXCI+XG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cIiNwb2ludCBvZiBwb2ludHNcIiBjbGFzcz1cInBvaW50XCIgc3R5bGU9XCIgdG9wOiB7e3BvaW50Lnl9fTsgbGVmdDoge3twb2ludC54fX1cIiAoY2xpY2spPVwic2hvd0RldGFpbHMoKVwiPjwvZGl2PlxuXHRcdFx0PGltZyBzcmM9XCIvaW1nL05ELmpwZ1wiIGFsdD1cIlwiPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJyaWdodE1lbnVcIj5cblx0XHQgICAgPGRpdiAqbmdGb3I9XCIjcG9pbnQgb2YgcG9pbnRzXCIgc3R5bGU9XCJcIiAoY2xpY2spPVwicmlnaHRNZW51U2hvd0RldGFpbHMoKVwiPlxuXHRcdCAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50X19jYXRjaGVyXCI+e3twb2ludC5uYW1lfX08L2Rpdj5cblx0XHQgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50X19kZXRhaWxzXCI+XG5cdFx0ICAgICAgICAgICAgPHA+eDp7e3BvaW50Lnh9fSB5Ont7cG9pbnQueX19PC9wPlxuXHRcdCAgICAgICAgICAgIDxwPmRlc2NyaXB0aW9uOiB7e3BvaW50LmRlc2NyaXB0aW9ufX08L3A+XG5cdFx0ICAgICAgICAgICAgPHA+YXV0aG9yOiB7e3BvaW50LmF1dGhvcn19PC9wPlxuXHRcdCAgICAgICAgICAgIDxwPmRhdGU6IHt7cG9pbnQuZGF0ZX19PC9wPlxuXHRcdCAgICAgICAgICAgIDxwPmlzT3BlbmVkOiB7e3BvaW50LmlzT3BlbmVkfX08L3A+XG5cdFx0ICAgICAgICAgICAgPHA+aXNSZW1vdmVkOiB7e3BvaW50LmlzUmVtb3ZlZH19PC9wPlxuXHRcdCAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidXBkYXRlUG9pbnQoJGV2ZW50KVwiIGF0dHIuZGF0YS1pZD1cInt7cG9pbnQuX2lkfX1cIj5FZGl0PC9idXR0b24+XG5cdFx0ICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZVBvaW50KCRldmVudClcIiBhdHRyLmRhdGEtaWQ9XCJ7e3BvaW50Ll9pZH19XCI+RGVsZXRlPC9idXR0b24+XG5cdFx0ICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNsb3NlUG9pbnQoJGV2ZW50KVwiIGF0dHIuZGF0YS1pZD1cInt7cG9pbnQuX2lkfX1cIj5DbG9zZTwvYnV0dG9uPlxuXHRcdCAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kb3dfX292ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kb3dfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2luZG93X19jbG9zZVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAgICBcblx0YFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGxzUG9pbnRzO1xuICAgIHBvaW50cztcbiAgICBkaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcFNlcnZpY2U6QXBwU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgZ2V0UG9pbnRzKCkge1xuICAgICAgICB0aGlzLmxzUG9pbnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZpZXdfcG9pbnRzJyk7XG5cbiAgICAgICAgaWYgKHRoaXMubHNQb2ludHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSB0aGlzLmxzUG9pbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHBTZXJ2aWNlLmdldFBvaW50cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxzUG9pbnRzID0gdGhpcy5wb2ludHM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJyArIGVycm9yWzBdKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRGF0YSBsb2FkZWQhXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIGNyZWF0ZVBvaW50KGUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHBvaW50XG4gICAgICAgIHZhciBwb2ludCA9IHtcbiAgICAgICAgICAgIG5hbWU6ICdBZGRlZCcsXG4gICAgICAgICAgICB4OiBlLmxheWVyWCxcbiAgICAgICAgICAgIHk6IGUubGF5ZXJZLFxuICAgICAgICAgICAgaXNPcGVuZWQ6IHRydWVcblxuICAgICAgICAgICAgLy92aWV3SUQ6ICdkZGRkJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFB1c2ggZWxlbWVudCB0byBnbG9iYWwgYXJyYXkgYW5kIGRyYXcgaXQhXG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpO1xuXG4gICAgICAgIC8vIFNlbmQgdG8gc2VydmVyXG4gICAgICAgIHRoaXMuYXBwU2VydmljZS5zZXRQb2ludChwb2ludClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gU3luY2hyb25pemUgd2l0aCBsb2NhbHN0b3JhZ2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJyArIGVycm9yWzBdKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBkZWxldGVQb2ludChldmVudCkge1xuICAgICAgICB2YXIgZWxJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkLFxuICAgICAgICAgICAgaWRJbkFycmF5ID0gbnVsbDtcblxuICAgICAgICAvLyBDaGVjayBpbmRleCBvZiBlbGVtZW50XG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGVsLl9pZCA9PSBlbElkKSB7XG4gICAgICAgICAgICAgICAgaWRJbkFycmF5ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlbW92ZSBlbGVtZW50IHdpdGggaW5kZXhcbiAgICAgICAgdGhpcy5wb2ludHMuc3BsaWNlKGlkSW5BcnJheSwgMSk7XG5cbiAgICAgICAgdGhpc1xuICAgICAgICAgICAgLmFwcFNlcnZpY2VcbiAgICAgICAgICAgIC5yZW1vdmVQb2ludCh7X2lkOiBldmVudC50YXJnZXQuZGF0YXNldC5pZH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIFN5bmNocm9uaXplIHdpdGggbG9jYWxzdG9yYWdlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBlcnJvclswXSksXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVE9ETyBVcGRhdGUgbWV0aG9kISEhIEN1cnJlbnRseSBpdCBvbmx5IHJlbW92ZXMgdGhlIGVsZW1lbnRcbiAgICB1cGRhdGVQb2ludChldmVudCkge1xuICAgICAgICB2YXIgZWxJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkLFxuICAgICAgICAgICAgaWRJbkFycmF5ID0gbnVsbDtcblxuICAgICAgICAvLyBDaGVjayBpbmRleCBvZiBlbGVtZW50XG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGVsLl9pZCA9PSBlbElkKSB7XG4gICAgICAgICAgICAgICAgaWRJbkFycmF5ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlbW92ZSBlbGVtZW50IHdpdGggaW5kZXhcbiAgICAgICAgdGhpcy5wb2ludHMuc3BsaWNlKGlkSW5BcnJheSwgMSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wb2ludHMpO1xuXG4gICAgICAgIHRoaXNcbiAgICAgICAgICAgIC5hcHBTZXJ2aWNlXG4gICAgICAgICAgICAucmVtb3ZlUG9pbnQoe19pZDogZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWR9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBTeW5jaHJvbml6ZSB3aXRoIGxvY2Fsc3RvcmFnZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnICsgZXJyb3JbMF0pLFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHVwZGF0ZVBvaW50KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgcmlnaHRNZW51U2hvd0RldGFpbHMoKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRQb2ludHMoKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiBgXG5cdFx0PGgxPlByb2plY3Q8L2gxPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTZXJ2aWNlOkFwcFNlcnZpY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1JvdXRlOiBQcm9qZWN0Jyk7XG4gICAgfVxufVxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGU6IGBcblx0XHQ8aDE+VmlldzwvaDE+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwVmlldyB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcFNlcnZpY2U6QXBwU2VydmljZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnUm91dGU6IFZpZXcnKTtcblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
