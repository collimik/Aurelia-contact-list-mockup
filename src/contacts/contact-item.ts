import { autoinject, inject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-framework';
import { Contact } from './../store/state';
import { EventAggregator } from 'aurelia-event-aggregator';

@autoinject()
@inject(EventAggregator)
export class ContactItem {
  @bindable public details: Contact = {
    id: '1234',
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '00-000 00'
  };
  @bindable view: string = './contact-card.html';
  ea;
  constructor (eventAggregator) {
    this.ea = eventAggregator;
  };
  deleteContact () {
    this.ea.publish('contacts:delete', {id: this.details.id});
  };
  activate (model: Contact = {
    id: '1234',
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '00-000 00'
  }) {
    this.details = model;
  }
}
