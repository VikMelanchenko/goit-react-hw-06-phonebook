import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

// items reducer
const items = createReducer([], {
  [actions.addContact]: (contacts, { payload }) => [...contacts, payload],
  [actions.removeContact]: (contacts, { payload }) =>
    contacts.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
