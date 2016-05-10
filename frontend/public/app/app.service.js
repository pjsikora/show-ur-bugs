System.register(['angular2/core', "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var AppService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppService = (function () {
                function AppService(http) {
                    this.http = http;
                    this.serverUrl = '/points';
                    this.headers = new http_1.Headers();
                }
                AppService.prototype.makeRequest = function (requestURL, object) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(requestURL, JSON.stringify(object), { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                AppService.prototype.getPoints = function () {
                    return this.makeRequest('/points', {});
                };
                AppService.prototype.setPoint = function (point) {
                    return this.makeRequest('/points/create', point);
                };
                AppService.prototype.updatePoint = function (point, data) {
                    return this.makeRequest('/points/update', data);
                };
                AppService.prototype.removePoint = function (id) {
                    return this.makeRequest('/points/delete', id);
                };
                AppService.prototype.getProjects = function () {
                };
                AppService.prototype.getViews = function () { };
                AppService.prototype.getUsers = function () { };
                AppService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppService);
                return AppService;
            })();
            exports_1("AppService", AppService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkFwcFNlcnZpY2UiLCJBcHBTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQXBwU2VydmljZS5tYWtlUmVxdWVzdCIsIkFwcFNlcnZpY2UuZ2V0UG9pbnRzIiwiQXBwU2VydmljZS5zZXRQb2ludCIsIkFwcFNlcnZpY2UudXBkYXRlUG9pbnQiLCJBcHBTZXJ2aWNlLnJlbW92ZVBvaW50IiwiQXBwU2VydmljZS5nZXRQcm9qZWN0cyIsIkFwcFNlcnZpY2UuZ2V0Vmlld3MiLCJBcHBTZXJ2aWNlLmdldFVzZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFNQ0Esb0JBQW1CQSxJQUFVQTtvQkFBVkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7b0JBSDdCQSxjQUFTQSxHQUFVQSxTQUFTQSxDQUFDQTtvQkFDN0JBLFlBQU9BLEdBQUdBLElBQUlBLGNBQU9BLEVBQUVBLENBQUNBO2dCQUVRQSxDQUFDQTtnQkFFekJELGdDQUFXQSxHQUFuQkEsVUFBb0JBLFVBQVVBLEVBQUVBLE1BQU1BO29CQUNyQ0UsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsY0FBT0EsRUFBRUEsQ0FBQ0E7b0JBQzVCQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxjQUFjQSxFQUFFQSxrQkFBa0JBLENBQUNBLENBQUNBO29CQUVuREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsRUFBQ0EsT0FBT0EsRUFBRUEsT0FBT0EsRUFBQ0EsQ0FBQ0E7eUJBQzNFQSxHQUFHQSxDQUFDQSxVQUFBQSxRQUFRQSxJQUFJQSxPQUFBQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFmQSxDQUFlQSxDQUFDQSxDQUFDQTtnQkFDcENBLENBQUNBO2dCQUVERiw4QkFBU0EsR0FBVEE7b0JBQ0NHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO2dCQUN4Q0EsQ0FBQ0E7Z0JBRURILDZCQUFRQSxHQUFSQSxVQUFTQSxLQUFLQTtvQkFDYkksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDbERBLENBQUNBO2dCQUVESixnQ0FBV0EsR0FBWEEsVUFBWUEsS0FBS0EsRUFBRUEsSUFBSUE7b0JBQ3RCSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO2dCQUNqREEsQ0FBQ0E7Z0JBRURMLGdDQUFXQSxHQUFYQSxVQUFZQSxFQUFFQTtvQkFDYk0sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDL0NBLENBQUNBO2dCQUVETixnQ0FBV0EsR0FBWEE7Z0JBR0FPLENBQUNBO2dCQUVEUCw2QkFBUUEsR0FBUkEsY0FBWVEsQ0FBQ0E7Z0JBQ2JSLDZCQUFRQSxHQUFSQSxjQUFZUyxDQUFDQTtnQkF0Q2RUO29CQUFDQSxpQkFBVUEsRUFBRUE7OytCQXVDWkE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQXZDQSxBQXVDQ0EsSUFBQTtZQXZDRCxtQ0F1Q0MsQ0FBQSIsImZpbGUiOiJhcHAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSdcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XG5cdHNlcnZlclVybDpzdHJpbmcgPSAnL3BvaW50cyc7XG5cdGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7fVxuXG5cdHByaXZhdGUgbWFrZVJlcXVlc3QocmVxdWVzdFVSTCwgb2JqZWN0KSB7XG5cdFx0dmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KHJlcXVlc3RVUkwsIEpTT04uc3RyaW5naWZ5KG9iamVjdCksIHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcblx0fVxuXG5cdGdldFBvaW50cygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYWtlUmVxdWVzdCgnL3BvaW50cycsIHt9KTtcblx0fVxuXG5cdHNldFBvaW50KHBvaW50KSB7XG5cdFx0cmV0dXJuIHRoaXMubWFrZVJlcXVlc3QoJy9wb2ludHMvY3JlYXRlJywgcG9pbnQpO1xuXHR9XG5cblx0dXBkYXRlUG9pbnQocG9pbnQsIGRhdGEpIHtcblx0XHRyZXR1cm4gdGhpcy5tYWtlUmVxdWVzdCgnL3BvaW50cy91cGRhdGUnLCBkYXRhKTtcblx0fVxuXG5cdHJlbW92ZVBvaW50KGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFrZVJlcXVlc3QoJy9wb2ludHMvZGVsZXRlJywgaWQpO1xuXHR9XG5cblx0Z2V0UHJvamVjdHMoKSB7XG5cblx0XHRcblx0fVxuXHRcblx0Z2V0Vmlld3MoKSB7fVxuXHRnZXRVc2VycygpIHt9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
