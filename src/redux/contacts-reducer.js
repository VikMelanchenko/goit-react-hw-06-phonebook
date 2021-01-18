import { combineReducers } from 'redux';
import types from './contacts-types';

// items reducer
const items = (contacts = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...contacts, payload];

    default:
      return contacts;
  }
};

// filter reducer
const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
