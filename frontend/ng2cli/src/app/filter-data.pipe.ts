import {Pipe, PipeTransform} from '@angular/core';
import {ProjectItem} from './projects/index';

@Pipe({
    name: 'filterData'
})
export class FilterData implements PipeTransform {

    transform(value:ProjectItem[], args:string[]):any {

        if (typeof value === 'object') {
            var resultArray = [];

            if (args.length === 0) {
                for (let item of value) {
                    resultArray.push(item);
                }
            }

            else {
                for (let item of value) {
                    if (item.name.match('^.*' + args[0] + '.*$')) {
                        resultArray.push(item);
                    }
                }
            }
            
            return resultArray;
        }

    }

}

