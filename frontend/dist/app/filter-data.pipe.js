"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FilterData = (function () {
    function FilterData() {
    }
    FilterData.prototype.transform = function (items, args, additional) {
        if (typeof items === 'object') {
            var paramNames = [], resultArray = [];
            if (typeof additional !== 'undefined' && typeof additional.filteredParam !== 'undefined') {
                paramNames = additional.filteredParam;
            }
            else {
                paramNames = Object.getOwnPropertyNames(items[0]);
            }
            if (args.length === 0) {
                resultArray = items;
            }
            else {
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    for (var _a = 0, paramNames_1 = paramNames; _a < paramNames_1.length; _a++) {
                        var param = paramNames_1[_a];
                        if (typeof item[param] !== "undefined" && item[param].toString() != null && item[param].toString().match(new RegExp('' + args, 'i'))) {
                            resultArray.push(item);
                            break; // if element is added do not add it second time
                        }
                    }
                }
            }
            return resultArray;
        }
        else {
            return null;
        }
    };
    FilterData = __decorate([
        core_1.Pipe({
            name: 'filterData',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], FilterData);
    return FilterData;
}());
exports.FilterData = FilterData;
//# sourceMappingURL=filter-data.pipe.js.map