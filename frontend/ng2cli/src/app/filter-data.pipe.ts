import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterData',
    pure: false
})

export class FilterData implements PipeTransform {
    transform(items:any[], args:string[], additional):any[] {





        if (typeof items === 'object') {
            var paramNames = ['all'];


            if (typeof additional !== 'undefined') {
                console.log('undefined');

                console.log("parameters: "+paramNames);
            }

            console.log(items[0]['name']);

            var resultArray = [];
            if (args.length === 0) {
                resultArray = items;
            }

            else {
                for (let item of items) {
                    // if (item.hasOwnProperty(paramNames)) {
                    //     console.log(item[paramNames]);
                    // }
                    
                    // Object.getOwnPropertyNames(item).forEach(function(element) {
                    //     console.log(element);
                    //     console.log(item);
                    // });
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