import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterData',
    pure: false
})

/**
 * Sample of usage:
 * <div class="row" *ngFor="let user of (users | filterData: filter.value : {filteredParam: ['login', 'email']})">
 * This will check if login or email matches
 *
 * or:
 * <div class="row" *ngFor="let user of (users | filterData: filter.value)">
 * This will check all params in objects
 */
export class FilterData implements PipeTransform {
    transform(items:any[], args:string[], additional):any[] {
        if (typeof items === 'object') {
            var paramNames = [],
                resultArray = [];


            if (typeof additional !== 'undefined' && typeof additional.filteredParam !== 'undefined') {
                paramNames = additional.filteredParam;
            } else {
                paramNames = Object.getOwnPropertyNames(items[0]);
            }


            if (args.length === 0) {
                resultArray = items;
            } else {
                for (let item of items) {
                    for (let param of paramNames) {
                        if (item[param].toString() != null && item[param].toString().match(new RegExp('' + args, 'i'))) {
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

    }

}