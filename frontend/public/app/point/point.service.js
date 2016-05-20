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
    var PointService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            PointService = (function () {
                function PointService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers();
                    this.apiUrl = '/api/points/';
                }
                PointService.prototype.makeRequest = function (requestURL, object) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(requestURL, JSON.stringify(object), { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                PointService.prototype.getPoints = function () {
                    return this.makeRequest(this.apiUrl, {});
                };
                PointService.prototype.getPointsOfView = function (viewID) {
                    return this.makeRequest(this.apiUrl + 'read', { viewID: viewID });
                };
                PointService.prototype.setPoint = function (point) {
                    return this.makeRequest(this.apiUrl + 'create', point);
                };
                PointService.prototype.updatePoint = function (point, data) {
                    return this.makeRequest(this.apiUrl + 'update', data);
                };
                PointService.prototype.removePoint = function (id) {
                    return this.makeRequest(this.apiUrl + 'delete', id);
                };
                PointService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PointService);
                return PointService;
            })();
            exports_1("PointService", PointService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50L3BvaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOlsiUG9pbnRTZXJ2aWNlIiwiUG9pbnRTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiUG9pbnRTZXJ2aWNlLm1ha2VSZXF1ZXN0IiwiUG9pbnRTZXJ2aWNlLmdldFBvaW50cyIsIlBvaW50U2VydmljZS5nZXRQb2ludHNPZlZpZXciLCJQb2ludFNlcnZpY2Uuc2V0UG9pbnQiLCJQb2ludFNlcnZpY2UudXBkYXRlUG9pbnQiLCJQb2ludFNlcnZpY2UucmVtb3ZlUG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQU9JQSxzQkFBbUJBLElBQVVBO29CQUFWQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtvQkFKN0JBLFlBQU9BLEdBQUdBLElBQUlBLGNBQU9BLEVBQUVBLENBQUNBO29CQUN4QkEsV0FBTUEsR0FBR0EsY0FBY0EsQ0FBQ0E7Z0JBR1FBLENBQUNBO2dCQUV6QkQsa0NBQVdBLEdBQW5CQSxVQUFvQkEsVUFBVUEsRUFBRUEsTUFBTUE7b0JBQ2xDRSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxjQUFPQSxFQUFFQSxDQUFDQTtvQkFDNUJBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGNBQWNBLEVBQUVBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7b0JBRW5EQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxFQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxFQUFDQSxDQUFDQTt5QkFDeEVBLEdBQUdBLENBQUNBLFVBQUFBLFFBQVFBLElBQUlBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBO2dCQUMxQ0EsQ0FBQ0E7Z0JBRURGLGdDQUFTQSxHQUFUQTtvQkFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdDQSxDQUFDQTtnQkFFREgsc0NBQWVBLEdBQWZBLFVBQWdCQSxNQUFNQTtvQkFDbEJJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUNBLE1BQU1BLEVBQUVBLEVBQUNBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUNBLENBQUNBLENBQUNBO2dCQUNsRUEsQ0FBQ0E7Z0JBRURKLCtCQUFRQSxHQUFSQSxVQUFTQSxLQUFLQTtvQkFDVkssTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBQ0EsUUFBUUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pEQSxDQUFDQTtnQkFFREwsa0NBQVdBLEdBQVhBLFVBQVlBLEtBQUtBLEVBQUVBLElBQUlBO29CQUNuQk0sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hEQSxDQUFDQTtnQkFFRE4sa0NBQVdBLEdBQVhBLFVBQVlBLEVBQUVBO29CQUNWTyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFDQSxRQUFRQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDdERBLENBQUNBO2dCQW5DTFA7b0JBQUNBLGlCQUFVQSxFQUFFQTs7aUNBK0NaQTtnQkFBREEsbUJBQUNBO1lBQURBLENBL0NBLEFBK0NDQSxJQUFBO1lBL0NELHVDQStDQyxDQUFBIiwiZmlsZSI6InBvaW50L3BvaW50LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIFBvaW50U2VydmljZSB7XG4gICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgYXBpVXJsID0gJy9hcGkvcG9pbnRzLyc7XG5cbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge31cblxuICAgIHByaXZhdGUgbWFrZVJlcXVlc3QocmVxdWVzdFVSTCwgb2JqZWN0KSB7XG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHJlcXVlc3RVUkwsIEpTT04uc3RyaW5naWZ5KG9iamVjdCksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICBnZXRQb2ludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KHRoaXMuYXBpVXJsLCB7fSk7XG4gICAgfVxuXG4gICAgZ2V0UG9pbnRzT2ZWaWV3KHZpZXdJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlUmVxdWVzdCh0aGlzLmFwaVVybCsncmVhZCcsIHt2aWV3SUQ6IHZpZXdJRH0pO1xuICAgIH1cblxuICAgIHNldFBvaW50KHBvaW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KHRoaXMuYXBpVXJsKydjcmVhdGUnLCBwb2ludCk7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9pbnQocG9pbnQsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVJlcXVlc3QodGhpcy5hcGlVcmwrJ3VwZGF0ZScsIGRhdGEpO1xuICAgIH1cblxuICAgIHJlbW92ZVBvaW50KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KHRoaXMuYXBpVXJsKydkZWxldGUnLCBpZCk7XG4gICAgfVxuXG4gICAgLy8gbWFrZVJlcXVlc3QobW9kZWwsIHR5cGUsIG9iamVjdCkge1xuICAgIC8vICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCksXG4gICAgLy8gICAgICAgICByZXF1ZXN0VVJMID0gbW9kZWwgKyAnLycgKyB0eXBlO1xuICAgIC8vICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChyZXF1ZXN0VVJMLCBKU09OLnN0cmluZ2lmeShvYmplY3QpLCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgLy8gICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgLy8gfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
