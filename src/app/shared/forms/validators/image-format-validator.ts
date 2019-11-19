import {FormControl} from '@angular/forms';

export class ImageFormatValidator {

  static imageFormat(control: FormControl) {
    // returns control
    return control.value.match(new RegExp('(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)')) ? null : {
      imageFormat: true
    };
  }

}
