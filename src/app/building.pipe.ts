import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'display'
})

// The pipe is responsable for making the filter from the properties on the array.
export class BuildingPipe implements PipeTransform {

    // We pass the parameters dynamically.
    transform(value:any, buildZone: string, propName: string) {
        if(value.length === 0) {
            return value;
        }
        // The array that holds the new data.
        const resultArray = [];
        for(const item of value){
            
            if(item[propName] === buildZone) {
                resultArray.push(item);
            }
        }
        // Sorting the array more information can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        resultArray.sort((a,b)=> (a.buildingname < b.buildingname ? -1 : 1));
        return resultArray;
    }
}