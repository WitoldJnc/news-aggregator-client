import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byCatigories'
})
export class ByCatigoriesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('tttt')
    console.log(value);
    console.log(args)
    return null;
  }

}
