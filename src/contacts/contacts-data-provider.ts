import { WebAPI } from './../web-api';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Store, connectTo } from 'aurelia-store';
import { pluck } from 'rxjs/operators';
import { State } from './../store/state';
import { autoinject, inject } from 'aurelia-framework';
import { get, deleteContact, saveContact } from './../actions/contacts';

// const deleteContact = async function (state, contactId, deleteContact) {
//   const contacts = await deleteContact(contactId);
//   return Object.assign({}, state, { contacts });
// }

@autoinject()
@inject(EventAggregator, Store, WebAPI)
@connectTo<State>({
  target: 'currentState',
  selector: {
    contacts: store => store.state.pipe(pluck('contacts')),
  }
})
export class ContactsDataProvider {
  ea;
  store;
  api;
  subscriber;
  currentState;
  constructor (eventAggregator, store, api) {
    this.ea = eventAggregator;
    this.store = store;
    this.api = api;
    this.store.registerAction('get', get);
    this.store.registerAction('deleteContact', deleteContact);
    this.store.registerAction('saveContact', saveContact);
  };
  attached () {
    this.subscriber = this.ea.subscribe('contacts:delete', payload => {
      this.store.dispatch(deleteContact, payload.id, this.api.deleteContact.bind(this.api));
    });
    this.subscriber = this.ea.subscribe('contacts:add', payload => {
      this.store.dispatch(saveContact, payload, this.api.saveContact.bind(this.api));
    });
  }
  created() {
    this.store.dispatch(get, this.api.getContactList.bind(this.api));
  }
}
