import React, { useState } from 'react';
import { InputStyle, FormStyle, Label } from './styled';
import { SaveUserName } from '@/services/user';

export default function NameForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted name:', name);
    SaveUserName(name);
    setName('');
  };

  //zatím nastaveno na enter a ne na button next

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Label>Fill in your name or nickname:</Label>
      <InputStyle
        type="text"
        placeholder="ToDoElla..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </FormStyle>
  );
}

//zatím se vypíše vepsané jméno do konzole
