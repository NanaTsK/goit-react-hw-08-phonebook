import { useState } from 'react';
import {
  PhonebookForm,
  InputWrap,
  ContactLabel,
  ContactInput,
  ContactAddBtn,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contact/selectors';
import { createContactThunk } from 'redux/contact/thunks';
import { notifyInit } from 'components/index.styled';
import { Notify } from 'notiflix';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [number, setNumber] = useState(INITIAL_STATE.number);
  const { contacts } = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();
    const isTrue = contacts.some(contact => name === contact.name);
    if (isTrue) {
      Notify.info(`${name} is already in your Contact List!`, notifyInit);
      return;
    }

    dispatch(createContactThunk({ name, number, id: nanoid() }));
    Notify.success(`${name} added to your Contact List!`, notifyInit);
    setName(INITIAL_STATE.name);
    setNumber(INITIAL_STATE.number);
  };

  const handleInput = e => {
    const { name, value } = e.target;

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

  return (
    <PhonebookForm onSubmit={handleSubmitForm}>
      <InputWrap>
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain up to 16 letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Comte d'Artagnan"
          maxLength="16"
          autoComplete="off"
          value={name}
          onChange={handleInput}
          required
        />
        <ContactLabel>Name</ContactLabel>
      </InputWrap>

      <InputWrap>
        <ContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number may contain 5-16 digits, spaces, dashes, parentheses and can start with +"
          maxLength="16"
          autoComplete="off"
          value={number}
          onChange={handleInput}
          required
        />
        <ContactLabel>Number</ContactLabel>
      </InputWrap>

      <ContactAddBtn type="submit">Add contact</ContactAddBtn>
    </PhonebookForm>
  );
};

export default ContactForm;
