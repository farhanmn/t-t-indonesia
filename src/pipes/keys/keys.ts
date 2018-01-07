import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the KeysPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'keys',
})
export class KeysPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, args?: any[]): any[] {

    if(value) {

      let keyArr: any[] = Object.keys(value),
        dataArr = [];

      keyArr.forEach((key: any) => {
        dataArr.push(key);
      });

      return dataArr;
    }
  }
}
