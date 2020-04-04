import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../model/Item";

@Pipe({
  name: 'bySearch'
})
export class BySearchPipe implements PipeTransform {

  transform(value: Item[], searchBy: string): Item[] {
    if (searchBy === '' || searchBy === undefined || searchBy === null) {
      return value;
    } else {
      return value
          .filter(x => x.content.toLowerCase().includes(searchBy.toLowerCase()));
    }
  }

}
