export async function get(state, get) {
  const contacts = await get();

  return Object.assign({}, state, { contacts });
}

export async function deleteContact(state, contact, deleteContact) {
  const deletedContact = await deleteContact(contact);
  const newState = Object.assign({}, state);
  console.log('deleted contact', deletedContact);
  newState.contacts.splice(state.contacts.findIndex(c => c.id === deletedContact.id), 1);
  return newState;
}

export async function saveContact(state, contact, saveContact) {
  const newContact = await saveContact(contact);
  const newState = Object.assign({}, state);
  newState.contacts = [...newState.contacts, newContact];
  return newState;
}
