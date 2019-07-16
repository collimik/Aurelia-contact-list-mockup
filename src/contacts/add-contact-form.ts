import { bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { inject } from 'aurelia-dependency-injection';
import { Contact } from './../store/state';

@inject(EventAggregator)
export class AddContactForm {
  ea: EventAggregator;
  model: any;
  @bindable details: Contact = {
    id: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };
  constructor (eventAggregator) {
    this.ea = eventAggregator;
  };
  public saveContact (): void {
    this.ea.publish('contacts:add', this.details);
    this.details = {
      id: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  };
  public get isValid (): boolean {
    return this.details.firstName.length > 0 && this.details.lastName.length > 0 && this.details.phoneNumber.length > 0;
  }
}
