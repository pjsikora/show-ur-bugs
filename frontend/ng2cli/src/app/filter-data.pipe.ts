import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterData',
    pure: false
})

export class FilterData implements PipeTransform {
    transform(items:any[], args:string[]):any[] {
        if (typeof items === 'object') {
            var resultArray = [];
            if (args.length === 0) {
                resultArray = items;
            }

            else {
                for (let item of items) {
                    Object.getOwnPropertyNames(item).forEach(function(element) {
                        console.log(element);
                        console.log(item);
                    });
                    if (item.name != null && item.name.match(new RegExp(''+args, 'i'))) {
                        // console.log(item.name);
                        resultArray.push(item);
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