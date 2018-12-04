import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashToSpaces'
})
export class DashToSpacesPipe implements PipeTransform {

  // value = value we are transforming
  // next are parameters we can use to perform the transformation
  transform(value: string, character: string): string {
    return value.replace('-',' ');
  }

}
