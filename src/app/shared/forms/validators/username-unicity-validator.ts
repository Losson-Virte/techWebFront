import {FormControl, ValidatorFn} from '@angular/forms';
import {User} from '../../interfaces/user';

export class UsernameUnicityValidator {

  constructor() {
  }

  static available(list: User[]): ValidatorFn {
    return (control: FormControl): {[key: string]: boolean} | null => {
      let exists;
      exists = false;
      Array.from(list, k => k.pseudo).forEach(j => exists ? j : exists = (control.value === j));
      return exists ? {available: true} : null;
    };
  }
}
