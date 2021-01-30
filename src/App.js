import ContactsForms from './components/ContactsForms/ContactsForm';

import ContactList from './components/ContactList/ContactList';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const formSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <ContactsForms onSubmit={formSubmitHandler} />
      <ToastContainer position="top-center" autoClose={2000} />
      <ContactList />
    </>
  );
}
