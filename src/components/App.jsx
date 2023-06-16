import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  Section,
  TitlePhonebook,
  ContactContainer,
  TitleContact,
} from './App.styled';

const defaultState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const CONTACT_KEY = 'contacts';
export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(CONTACT_KEY)) ?? defaultState;
  });
  const [filter, setFilter] = useState('');

  //--------------- Add to localStorage coctact -----------------
  useEffect(() => {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
  }, [contacts]);

  //---------------Додавання контакту-----------------
  const formSubmitHandler = data => {
    console.log(data);

    const nameInBook = contacts.some(({ name }) => name === data.name);
    if (nameInBook) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    setContacts(prevState => [data, ...prevState]);
    console.log(contacts);
  };

  //---------------Видалення контакту-----------------
  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  //---------------Фільтрація-----------------
  const changeFilter = evt => {
    setFilter(evt.target.value);
  };
  //---------------Already in coctact-----------------
  const filterContants = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Section>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm onSubmit={formSubmitHandler} />

      <ContactContainer>
        <TitleContact>Contact</TitleContact>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={filterContants}
          onDeleteContact={deleteContact}
        />
      </ContactContainer>
    </Section>
  );
}
