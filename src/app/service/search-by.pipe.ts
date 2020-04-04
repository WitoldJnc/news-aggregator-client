import {Pipe, PipeTransform} from '@angular/core';
import {Content} from "../model/Content";

@Pipe({
    name: 'searchBy'
})
export class SearchByPipe implements PipeTransform {

    transform(value: Array<Content>, searcBy: string): Array<Content> {
        if (searcBy === undefined || searcBy === '') {
            return value;
        } else {


          return  value.filter(x => x.news.items.some(c => c.content.toLowerCase().includes(searcBy.toLowerCase())));
        }

    }

}
