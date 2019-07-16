export interface Contact {
  id: string,
  firstName: string,
  lastName: string,
  phoneNumber: string
}

export interface State {
  contacts: Contact[];
}

export const initialState: State = {
  contacts: [
    {
      id: 'contact-1',
      firstName: 'Fred',
      lastName: 'Waterford', 
      phoneNumber: '55 66 77'
    },
    {
      id: 'contact-2',
      firstName: 'Serena',
      lastName: 'Joy', 
      phoneNumber: '55 66 77'
    },
    {
      id: 'contact-3',
      firstName: 'June',
      lastName: 'Osborne', 
      phoneNumber: '55 66 77'
    },
    {
      id: 'contact-4',
      firstName: 'Serena',
      lastName: 'Joy', 
      phoneNumber: '55 66 77'
    }
  ]
}
