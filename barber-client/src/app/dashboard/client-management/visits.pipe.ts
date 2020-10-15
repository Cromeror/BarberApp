import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'visits'
})
export class VisitsPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value === 0) {
      return '';
    }
    return value === 1 ? '1 visita' : value + ' visitas';
  }
}
