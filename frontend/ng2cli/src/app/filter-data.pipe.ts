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
                console.time('firstLoop');
                // for (var i=0, len = value.length; i<len; i++) {
                //     resultArray.push(value[i]);
                // }

                value.forEach(function(item) {
                    resultArray.push(item);
                });

                // value.map(function(item){
                //     resultArray.push(item);
                // });

                // for (let item of value) {
                //     resultArray.push(item);
                // }
                console.timeEnd('firstLoop');
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