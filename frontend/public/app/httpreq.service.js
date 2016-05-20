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
    var HTTPReq;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HTTPReq = (function () {
                function HTTPReq(http) {
                    this.http = http;
                    this.headers = new http_1.Headers();
                    this.api = '/api/';
                }
                HTTPReq.prototype.makeRequest = function (model, type, object) {
                    var headers = new http_1.Headers(), requestURL = this.api + model + '/' + type;
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(requestURL, JSON.stringify(object), { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                HTTPReq = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPReq);
                return HTTPReq;
            })();
            exports_1("HTTPReq", HTTPReq);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHByZXEuc2VydmljZS50cyJdLCJuYW1lcyI6WyJIVFRQUmVxIiwiSFRUUFJlcS5jb25zdHJ1Y3RvciIsIkhUVFBSZXEubWFrZVJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQU1JQSxpQkFBbUJBLElBQVVBO29CQUFWQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFNQTtvQkFIN0JBLFlBQU9BLEdBQUdBLElBQUlBLGNBQU9BLEVBQUVBLENBQUNBO29CQUN4QkEsUUFBR0EsR0FBR0EsT0FBT0EsQ0FBQ0E7Z0JBRWtCQSxDQUFDQTtnQkFFakNELDZCQUFXQSxHQUFYQSxVQUFZQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFFQSxNQUFNQTtvQkFDM0JFLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLGNBQU9BLEVBQUVBLEVBQ3ZCQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxLQUFLQSxHQUFHQSxHQUFHQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFFL0NBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLGNBQWNBLEVBQUVBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7b0JBRW5EQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxFQUFDQSxPQUFPQSxFQUFFQSxPQUFPQSxFQUFDQSxDQUFDQTt5QkFDeEVBLEdBQUdBLENBQUNBLFVBQUFBLFFBQVFBLElBQUlBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBO2dCQUMxQ0EsQ0FBQ0E7Z0JBaEJMRjtvQkFBQ0EsaUJBQVVBLEVBQUVBOzs0QkFrQlpBO2dCQUFEQSxjQUFDQTtZQUFEQSxDQWxCQSxBQWtCQ0EsSUFBQTtZQWxCRCw2QkFrQkMsQ0FBQSIsImZpbGUiOiJodHRwcmVxLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEhUVFBSZXEge1xuICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGFwaSA9ICcvYXBpLyc7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge31cblxuICAgIG1ha2VSZXF1ZXN0KG1vZGVsLCB0eXBlLCBvYmplY3QpIHtcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpLFxuICAgICAgICAgICAgcmVxdWVzdFVSTCA9IHRoaXMuYXBpICsgbW9kZWwgKyAnLycgKyB0eXBlO1xuXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChyZXF1ZXN0VVJMLCBKU09OLnN0cmluZ2lmeShvYmplY3QpLCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
