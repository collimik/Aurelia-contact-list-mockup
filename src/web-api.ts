let latency = 200;
let id = 0;

function getId() {
  return ++id;
}

let contacts = [
  {
    id: getId(),
    firstName: 'John',
    lastName: 'Tolkien',
    phoneNumber: '867-5309'
  },
  {
    id: getId(),
    firstName: 'Clive',
    lastName: 'Lewis',
    phoneNumber: '867-5309'
  },
  {
    id: getId(),
    firstName: 'Owen',
    lastName: 'Barfield',
    phoneNumber: '867-5309'
  },
  {
    id: getId(),
    firstName: 'Charles',
    lastName: 'Williams',
    phoneNumber: '867-5309'
  }
];

export class WebAPI {
  isRequesting = false;

  getContactList() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = contacts.map(x => {
          return {
            id: x.id,
            firstName: x.firstName,
            lastName: x.lastName,
            phoneNumber: x.phoneNumber
          }
        });
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  deleteContact(id) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        const idx = contacts.findIndex(contact => contact.id === id);
          resolve(contacts[idx]);
        this.isRequesting = false;
      }, latency);
    });
  }

  saveContact(contact) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(contact));
        instance.id = getId();
        contacts.push(instance);
        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }
}
