import {Injectable} from '@angular/core';
import {Option} from './generic-models';

@Injectable({
  providedIn: 'root'
})
export class GrownStateService {

  getGrownStateOptions(): Option[] {
    return [
      {value: 'adult', name: 'Adulto'},
      {value: 'teen', name: 'Adolescente'},
      {value: 'kids', name: 'Niño'}
    ];
  }

  classifyGrownState(age: number): string {
    if (age < 18) {
      return 'teen';
    }
    if (age < 15) {
      return 'kids';
    }
    return 'adult';
  }
}
