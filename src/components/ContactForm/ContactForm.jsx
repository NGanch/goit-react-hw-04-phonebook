import React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import {
  SearchFormStyled,
  LabelName,
  InputName,
  LabelNumber,
  InputNumber,
  Button,
} from './ContactForm.styled.jsx';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  //id
  const nameId = nanoid();

  //---- Опрацювання полів форми -----
  const handleNameChange = evt => {
    setName(evt.target.value);
    setId(nameId);
  };
  const handleNumberChange = evt => {
    setNumber(evt.target.value);
  };
  //   const handleChange = event => {

  // switch(event.target.name) {
  //   case 'name':
  //     setName(event.target.value);
  //     setId(nameId)
  //     break;
  //     case 'number':
  //       setNumber(event.target.value);
  //       break;
  //       default:
  //       return;
  // }
  //   }

  //---- Опрацювання форми -----
  const handleSubmit = evt => {
    evt.preventDefault();
    //Виклик функції  Submit
    onSubmit({ id: id, name: name, number: number });
    // Очишення
    setName('');
    setNumber('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <LabelName htmlFor={id}>
        <AiOutlineUserAdd />
        Name
        <InputName
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelName>
      <LabelNumber>
        <AiOutlinePhone />
        Number
        <InputNumber
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelNumber>

      <Button type="submit">Add contact</Button>
    </SearchFormStyled>
  );
}
