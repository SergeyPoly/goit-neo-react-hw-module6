import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { selectVisibleContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const contactCards = contacts.map(({ id, name, number }) => (
    <Contact
      key={id}
      id={id}
      name={name}
      number={number}
      handleDelete={handleDelete}
    />
  ));

  return <div className={css.list}>{contactCards}</div>;
};

export default ContactList;
