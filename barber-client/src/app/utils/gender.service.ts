import {Injectable} from '@angular/core';
import {Option} from './generic-models';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  getGenderOption(): Option[] {
    return [
      {value: 'man', name: 'Hombre'},
      {value: 'woman', name: 'Mujer'},
      {value: 'other', name: 'Otro'}
    ];
  }
}
