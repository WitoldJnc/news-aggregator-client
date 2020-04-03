import {Pipe, PipeTransform} from '@angular/core';
import {Item} from "../model/Item";

@Pipe({
    name: 'byCatigories'
})
export class ByCatigoriesPipe implements PipeTransform {

    transform(value: Item[], catigory: string): Item[] {
        if (catigory === 'all' || catigory === undefined || catigory === null) {
            console.log(value)
            console.log(catigory)
            return value;
        } else {
            return value
                .filter(x => x.categories.toString() === catigory);
        }
    }

}
