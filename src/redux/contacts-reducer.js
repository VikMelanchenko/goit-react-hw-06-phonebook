import { combineReducers } from 'redux';
import types from './contacts-types';

const items = (contacts = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...contacts, payload];

    case type.REMOVE:
      return contacts.filter(({ id }) => id !== payload);

    default:
      return contacts;
  }
};

const filter = (state = '', type, payload) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
