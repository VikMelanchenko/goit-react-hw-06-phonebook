import s from '../ContactsForms/ContactsForm.module.scss';
import ContactListItem from '../ContactListItem/ContactListItem';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';

// список добавленных контактов и удаление
const ContactList = ({ contacts, onRemoveContact }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.contact__list}>
      {contacts &&
        contacts.map((contact, id) => (
          <ContactListItem
            key={contact.id}
            id={id}
            name={contact.name}
            number={contact.number}
            onRemoveContact={() => onRemoveContact(id)}
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

const mapDispatchToProps = (dispatch) => ({
  onRemoveContact: (id) => dispatch(contactsActions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
