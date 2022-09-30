import {Injectable} from '@angular/core';
import {IDictionary} from '../model/IDictionary';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  dictionaryForm: IDictionary[] = [
    {
      word: 'hello',
      mean: 'xin chao'
    }, {
      word: 'cat',
      mean: 'con meo'
    }, {
      word: 'dog',
      mean: 'con cho'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.dictionaryForm;
  }
}
