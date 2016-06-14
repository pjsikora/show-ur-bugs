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
    FilterData.prototype.transform = function (items, args) {
        if (typeof items === 'object') {
            var resultArray = [];
            if (args.length === 0) {
                for (var i = 0, len = items.length; i < len; i++) {
                    resultArray.push(items[i]);
                }
            }
            else {
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    console.log(item);
                    if (item.name.match(new RegExp(args[0], 'i'))) {
                        resultArray.push(item);
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
// import {Pipe, PipeTransform} from '@angular/core';
// import {ProjectItem} from './projects/index';
//
// @Pipe({
//     name: 'filterData'
// })
// export class FilterData implements PipeTransform {
//
//     transform(value:ProjectItem[], args:string[]):any {
//         if (value.length === 0) {
//             return value;
//         }
//
//         var resultArray = [];
//
//         for (let item of value) {
//             if (item.name.match('^.*' + args[0] + '.*$')) {
//                 resultArray.push(item);
//             }
//         }
//
//         return resultArray;
//     }
//
// } 
//# sourceMappingURL=filter-data.pipe.js.map