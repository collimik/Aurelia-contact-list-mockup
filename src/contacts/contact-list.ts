import { bindable } from 'aurelia-framework';
import { autoinject} from 'aurelia-dependency-injection';
import { Contact } from './../store/state';

type viewTemplate = './contacts-gallery.html' | './contacts-table.html';
type viewType = 'gallery' | 'table';

@autoinject()
export class ContactList {
  @bindable contacts: Contact[] = [];
  @bindable view: viewTemplate = './contacts-gallery.html';
  @bindable viewMode: viewType = 'gallery';
  switchView (options) {
    this.view = options.viewTemplate;
    this.viewMode = options.viewMode;
  }
  get contactsNameDescending (): Contact[] {
    return this.contacts.sort((a,b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0));
  }
}
