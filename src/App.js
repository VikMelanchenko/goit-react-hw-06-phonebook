import { useState } from 'react';

import ContactsForms from './components/ContactsForms/ContactsForm';

import ContactList from './components/ContactList/ContactList';

import Filter from './components/Filter/Filter';

import shortid from 'shortid';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  // form submit
  const formSubmitHandler = (data) => {
    console.log(data);
  };

  // add new contact / actions
  // const addContact = (name, number) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  // check unique contact name
  // if (contacts.find((contact) => contact.name === name)) {
  //   return toast.error(`${name} is already in contacts`);
  // }

  //   setContacts((prevState) => [contact, ...prevState]);
  // };

  // remove contact / actions
  // const removeContact = (id) => {
  //   setContacts((prevState) =>
  //     prevState.filter((contact) => contact.id !== id)
  //   );
  // };

  // // filter contacts / actions
  // const changeFilter = (e) => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForms onSubmit={formSubmitHandler} />
      <ToastContainer position="top-center" autoClose={2000} />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </>
  );
}
