import shortid from 'shortid';

import types from './contacts-types';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const removeContact = (contactId) => ({
  type: types.REMOVE,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, removeContact, changeFilter };
