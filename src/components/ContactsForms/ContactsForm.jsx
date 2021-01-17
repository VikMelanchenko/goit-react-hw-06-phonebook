import s from './ContactsForm.module.scss';
import { useState } from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';

function ContactsForms({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(name, number);
    onReset();
  };

  const onReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form__item} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={s.input__item}
          type="text"
          name="name"
          value={name}
          placeholder="enter contact name"
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Pnone number
        <input
          className={s.input__item}
          type="tel"
          name="number"
          value={number}
          placeholder="enter phone number"
          onChange={handleChange}
        ></input>
      </label>
      <button className={s.button__submit} type="submit">
        Add contact
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactsForms);
