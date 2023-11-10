import { ContactsList } from 'components/ContactsList/ContactsList';
import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/contacts/thunks';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <section>
      <FormAddContacts />
      <ContactsList />
    </section>
  );
};

export default Contacts;
