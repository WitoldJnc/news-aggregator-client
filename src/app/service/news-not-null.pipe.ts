import {Pipe, PipeTransform} from '@angular/core';
import {Content} from "../model/Content";

@Pipe({
    name: 'newsNotNull'
})
export class NewsNotNullPipe implements PipeTransform {

    transform(value: Array<Content>, filterCatigory: string): Array<Content> {
        if (filterCatigory === undefined || filterCatigory === 'all') {
            return value;
        } else {
            return value.filter(a => a.news.items.some(c => c.categories.some(v => v.includes(filterCatigory))));
        }

    }

}
