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
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers();
                    this.apiUrl = '/api/users/';
                }
                UserService.prototype.makeRequest = function (requestURL, object) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(requestURL, JSON.stringify(object), { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                UserService.prototype.getUsers = function () {
                    return this.makeRequest(this.apiUrl, {});
                };
                UserService.prototype.setUser = function (point) {
                    return this.makeRequest(this.apiUrl + 'create', point);
                };
                UserService.prototype.updateUser = function (point, data) {
                    return this.makeRequest(this.apiUrl + 'update', data);
                };
                UserService.prototype.removeUser = function (id) {
                    return this.makeRequest(this.apiUrl + 'delete', id);
                };
                UserService.prototype.login = function (userObject) {
                    return this.makeRequest(this.apiUrl + 'login', userObject);
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlVzZXJTZXJ2aWNlIiwiVXNlclNlcnZpY2UuY29uc3RydWN0b3IiLCJVc2VyU2VydmljZS5tYWtlUmVxdWVzdCIsIlVzZXJTZXJ2aWNlLmdldFVzZXJzIiwiVXNlclNlcnZpY2Uuc2V0VXNlciIsIlVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIiLCJVc2VyU2VydmljZS5yZW1vdmVVc2VyIiwiVXNlclNlcnZpY2UubG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQU1JQSxxQkFBbUJBLElBQVVBO29CQUFWQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtvQkFIN0JBLFlBQU9BLEdBQUdBLElBQUlBLGNBQU9BLEVBQUVBLENBQUNBO29CQUN4QkEsV0FBTUEsR0FBR0EsYUFBYUEsQ0FBQ0E7Z0JBRVNBLENBQUNBO2dCQUV6QkQsaUNBQVdBLEdBQW5CQSxVQUFvQkEsVUFBVUEsRUFBRUEsTUFBTUE7b0JBQ2xDRSxJQUFJQSxPQUFPQSxHQUFHQSxJQUFJQSxjQUFPQSxFQUFFQSxDQUFDQTtvQkFDNUJBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGNBQWNBLEVBQUVBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7b0JBRW5EQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxFQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxFQUFDQSxDQUFDQTt5QkFDeEVBLEdBQUdBLENBQUNBLFVBQUFBLFFBQVFBLElBQUlBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBO2dCQUMxQ0EsQ0FBQ0E7Z0JBRURGLDhCQUFRQSxHQUFSQTtvQkFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdDQSxDQUFDQTtnQkFFREgsNkJBQU9BLEdBQVBBLFVBQVFBLEtBQUtBO29CQUNUSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFDQSxRQUFRQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDekRBLENBQUNBO2dCQUVESixnQ0FBVUEsR0FBVkEsVUFBV0EsS0FBS0EsRUFBRUEsSUFBSUE7b0JBQ2xCSyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDeERBLENBQUNBO2dCQUVETCxnQ0FBVUEsR0FBVkEsVUFBV0EsRUFBRUE7b0JBQ1RNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUNBLFFBQVFBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO2dCQUN0REEsQ0FBQ0E7Z0JBRUROLDJCQUFLQSxHQUFMQSxVQUFNQSxVQUFVQTtvQkFDWk8sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsT0FBT0EsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7Z0JBQy9EQSxDQUFDQTtnQkFsQ0xQO29CQUFDQSxpQkFBVUEsRUFBRUE7O2dDQW1DWkE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQW5DQSxBQW1DQ0EsSUFBQTtZQW5DRCxxQ0FtQ0MsQ0FBQSIsImZpbGUiOiJ1c2VyL3VzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSdcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGFwaVVybCA9ICcvYXBpL3VzZXJzLyc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge31cblxuICAgIHByaXZhdGUgbWFrZVJlcXVlc3QocmVxdWVzdFVSTCwgb2JqZWN0KSB7XG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHJlcXVlc3RVUkwsIEpTT04uc3RyaW5naWZ5KG9iamVjdCksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICBnZXRVc2VycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVJlcXVlc3QodGhpcy5hcGlVcmwsIHt9KTtcbiAgICB9XG5cbiAgICBzZXRVc2VyKHBvaW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KHRoaXMuYXBpVXJsKydjcmVhdGUnLCBwb2ludCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVXNlcihwb2ludCwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlUmVxdWVzdCh0aGlzLmFwaVVybCsndXBkYXRlJywgZGF0YSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVXNlcihpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlUmVxdWVzdCh0aGlzLmFwaVVybCsnZGVsZXRlJywgaWQpO1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXJPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZVJlcXVlc3QodGhpcy5hcGlVcmwgKyAnbG9naW4nLCB1c2VyT2JqZWN0KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
