import { useState } from 'react';

import ContactsForms from './components/ContactsForms/ContactsForm';

import ContactList from './components/ContactList/ContactList';

import Filter from './components/Filter/Filter';

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

  // check unique contact name
  //   if (contacts.find((contact) => contact.name === name)) {
  //     return toast.error(`${name} is already in contacts`);
  //   }

  //   setContacts((prevState) => [contact, ...prevState]);
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
