import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usernamePipe'
})
export class UsernamePipePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.split('@')[0];
  }

}
