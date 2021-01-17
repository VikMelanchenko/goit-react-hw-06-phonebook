import s from '../ContactsForms/ContactsForm.module.scss';
import ContactListItem from '../ContactListItem/ContactListItem';
import contactsActions from '../../redux/contacts-actions';
import { connect } from 'react-redux';

// список добавленных контактов и удаление
const ContactList = ({ contacts, onRemoveContact }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onRemoveContact={onRemoveContact}
        />
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

const mapDispatchtoProps = (dispatch) => ({
  onRemoveContact: (id) => dispatch(contactsActions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ContactList);
