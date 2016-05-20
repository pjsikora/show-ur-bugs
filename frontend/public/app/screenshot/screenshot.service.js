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
    var ScreenshotService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ScreenshotService = (function () {
                function ScreenshotService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers();
                    this.apiUrl = '/api/screenshots/';
                }
                ScreenshotService.prototype.makeRequest = function (requestURL, object) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(requestURL, JSON.stringify(object), { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                ScreenshotService.prototype.make = function (obj) {
                    return this.makeRequest(this.apiUrl + 'create', obj);
                };
                ScreenshotService.prototype.read = function (id) {
                    return this.makeRequest(this.apiUrl + 'read', { projectID: id });
                };
                ScreenshotService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ScreenshotService);
                return ScreenshotService;
            })();
            exports_1("ScreenshotService", ScreenshotService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbnNob3Qvc2NyZWVuc2hvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlNjcmVlbnNob3RTZXJ2aWNlIiwiU2NyZWVuc2hvdFNlcnZpY2UuY29uc3RydWN0b3IiLCJTY3JlZW5zaG90U2VydmljZS5tYWtlUmVxdWVzdCIsIlNjcmVlbnNob3RTZXJ2aWNlLm1ha2UiLCJTY3JlZW5zaG90U2VydmljZS5yZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFNSUEsMkJBQW1CQSxJQUFVQTtvQkFBVkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBTUE7b0JBSDdCQSxZQUFPQSxHQUFHQSxJQUFJQSxjQUFPQSxFQUFFQSxDQUFDQTtvQkFDeEJBLFdBQU1BLEdBQUdBLG1CQUFtQkEsQ0FBQ0E7Z0JBRUdBLENBQUNBO2dCQUV6QkQsdUNBQVdBLEdBQW5CQSxVQUFvQkEsVUFBVUEsRUFBRUEsTUFBTUE7b0JBQ2xDRSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxjQUFPQSxFQUFFQSxDQUFDQTtvQkFDNUJBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGNBQWNBLEVBQUVBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7b0JBRW5EQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxFQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxFQUFDQSxDQUFDQTt5QkFDeEVBLEdBQUdBLENBQUNBLFVBQUFBLFFBQVFBLElBQUlBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBO2dCQUMxQ0EsQ0FBQ0E7Z0JBRURGLGdDQUFJQSxHQUFKQSxVQUFLQSxHQUFHQTtvQkFDSkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBQ0EsUUFBUUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZEQSxDQUFDQTtnQkFFREgsZ0NBQUlBLEdBQUpBLFVBQUtBLEVBQUVBO29CQUNISSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFDQSxNQUFNQSxFQUFFQSxFQUFDQSxTQUFTQSxFQUFFQSxFQUFFQSxFQUFDQSxDQUFDQSxDQUFDQTtnQkFDakVBLENBQUNBO2dCQXRCTEo7b0JBQUNBLGlCQUFVQSxFQUFFQTs7c0NBdUJaQTtnQkFBREEsd0JBQUNBO1lBQURBLENBdkJBLEFBdUJDQSxJQUFBO1lBdkJELGlEQXVCQyxDQUFBIiwiZmlsZSI6InNjcmVlbnNob3Qvc2NyZWVuc2hvdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBTY3JlZW5zaG90U2VydmljZSB7XG4gICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgYXBpVXJsID0gJy9hcGkvc2NyZWVuc2hvdHMvJztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7fVxuXG4gICAgcHJpdmF0ZSBtYWtlUmVxdWVzdChyZXF1ZXN0VVJMLCBvYmplY3QpIHtcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QocmVxdWVzdFVSTCwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cblxuICAgIG1ha2Uob2JqKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KHRoaXMuYXBpVXJsKydjcmVhdGUnLCBvYmopO1xuICAgIH1cblxuICAgIHJlYWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVJlcXVlc3QodGhpcy5hcGlVcmwrJ3JlYWQnLCB7cHJvamVjdElEOiBpZH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
