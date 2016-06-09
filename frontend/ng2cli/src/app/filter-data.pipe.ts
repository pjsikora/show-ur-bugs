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
                for (var i=0, len = items.length; i<len; i++) {
                    resultArray.push(items[i]);
                }
            }

            else {
                for (let item of items) {
                    console.log(item);

                    if (item.name.match(new RegExp(args[0], 'i'))) {
                        resultArray.push(item);
                    }
                    // if (item.name.match('^.*' + args[0] + '.*$')) {
                    //     resultArray.push(item);
                    // }
                }
            }

            return resultArray;
        }

    }

}



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