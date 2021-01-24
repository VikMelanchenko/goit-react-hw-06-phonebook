import s from '../ContactsForms/ContactsForm.module.scss';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';

// список добавленных контактов и удаление при клике на кнопку
const ContactList = ({ contacts, onRemoveContact }) => {
  if (contacts.length === 0) return null;

  return (
    <ul className={s.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contact__item}>
          {name}: {number}
          <button
            className={s.button__submit}
            onClick={() => onRemoveContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveContact: (id) => dispatch(contactsActions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
