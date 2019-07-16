import { bindable } from 'aurelia-framework';

export class icon {
  styleObject: any;
  @bindable size: string = '1em';
  constructor () {
    this.styleObject = {
      fontSize: this.size
    }
  }
}
