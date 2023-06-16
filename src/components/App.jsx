import React, { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {Section, TitlePhonebook, ContactContainer, TitleContact} from './App.styled';


// const CONTACT_KEY = 'contacts';
export function App () {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  //--------------- Add to localStorage coctact -----------------
  // useEffect(() => {
  //   const oldContact = localStorage.getItem(CONTACT_KEY);
  //   const parsedContacts = JSON.parse(oldContact);
  //   parsedContacts ? setContacts(parsedContacts) : setContacts([]);
    
  // }, [])
 
  //--------------- Add to localStorage coctact -----------------
  // useEffect(() =>{
  //   // const {contacts} = this.state;
  //   // if (contacts !== prevState.contacts) {
  //   //   localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
  //   // }
  // })
  // componentDidUpdate(prevProps, prevState) {
  //   const {contacts} = this.state;
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
  //   }
  // }
  //---------------Додавання контакту-----------------
  const formSubmitHandler = data => {
    console.log(data)
 
    const nameInBook = contacts.some(
      ({ name }) => name === data.name);
    if (nameInBook) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    setContacts(prevState => [data, ...prevState]);
    console.log(contacts)
  };

  //---------------Видалення контакту-----------------
  const deleteContact = contactId => {
    setContacts(prevState => (
           prevState.filter(contact => contact.id !== contactId)
          ));

  
  };
  //---------------Фільтрація-----------------
  const changeFilter = evt => {
    setFilter(evt.target.value);

  };
  //---------------Already in coctact-----------------
  // const filterContants = () => {
  //   // const normalizedFilter = filtered;
  //   return contacts.filter(({ name }) =>
  //     name.includes(filtered)
  //   );
  // };

  //   const filterContants = (filtered) => {
  //   // const { contacts, filter } = this.state;
  //   // const normalizedFilter = filtered.toLowerCase();
  //   setContacts(prevState => (prevState.filter(({ name }) =>
  //   name.toLowerCase().includes(filtered.toLowerCase())
  //   )))
  //   // console.log(normalizedFilter)
  //   // return contacts.filter(({ name }) =>
  //   //   name.toLowerCase().includes(normalizedFilter)
  //   // );
  // };

    return (
      <Section>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm
        onSubmit={formSubmitHandler}
      />
      
      <ContactContainer>
        <TitleContact>Contact</TitleContact>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={contacts}
          onDeleteContact={deleteContact}
        />
      </ContactContainer>
      </Section> 
    );
  }

//=============================================
// import { nanoid } from "nanoid";

//  import shortid from "shortid";
// model.id = nanoid()
// let nameInBook = '';
// const CONTACT_KEY = 'contacts';
// export class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   // nameInputId = shortid.generate();
//   //--------------- Add to localStorage coctact -----------------
//   componentDidMount() {
//     const contact = localStorage.getItem(CONTACT_KEY);
//     const parsedContacts = JSON.parse(contact);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   //--------------- Add to localStorage coctact -----------------
//   componentDidUpdate(prevProps, prevState) {
//     const {contacts} = this.state;
//     if (contacts !== prevState.contacts) {
//       localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
//     }
//   }
//   //---------------Додавання контакту-----------------
//   formSubmitHandler = data => {
//     console.log(data)
//     const nameInBook = this.state.contacts.some(
//       ({ name }) => name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
//     );
//     if (nameInBook) {
//       alert(`${data.name} is already in contacts.`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [data, ...prevState.contacts],
//     }));
//     console.log(this.state.contacts)
//   };

//   //---------------Видалення контакту-----------------
//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };
//   //---------------Фільтрація-----------------
//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };
//   //---------------Already in coctact-----------------
//   filteredinContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     // console.log(normalizedFilter)
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   };


//   render() {
//     const { filter } = this.state;
//     const filterContants = this.filteredinContacts();
//     // const normalizedFilter = this.state.filter.toLowerCase();
//     // const filterContants = contacts.filter(contact =>
//     //   contact.name.toLowerCase().includes(normalizedFilter));

//     return (
//       <Section>
//       <TitlePhonebook>Phonebook</TitlePhonebook>
//       <ContactForm
//         onSubmit={this.formSubmitHandler}
//         onAlert={this.alertContact}
//       />
      
//       <ContactContainer>
//         <TitleContact>Contact</TitleContact>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={filterContants}
//           onDeleteContact={this.deleteContact}
//         />
//       </ContactContainer>
//       </Section> 
//     );
//   }
// }