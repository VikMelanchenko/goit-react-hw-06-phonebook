import { combineReducers } from 'redux';
import types from './contacts-types';

// items reducer
const items = (contacts = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...contacts, payload];

    case types.REMOVE:
      return contacts.filter(({ id }) => id !== payload);

    default:
      return contacts;
  }
};

// filter reducer
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
