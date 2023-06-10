import React, { useState } from 'react';
import { InputStyle, FormStyle, Label } from './styled';
import { SaveUserName } from '@/services/user';
import { useRouter } from 'next/router';

export default function NameForm({ id }) {
  const router = useRouter();

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted name:', name);
    SaveUserName(name);
    setName('');
    router.push('/todolist');
  };

  return (
    <FormStyle id={id} onSubmit={handleSubmit}>
      <Label>Fill in your name or nickname:</Label>
      <InputStyle
        type="text"
        placeholder="Todoella..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </FormStyle>
  );
}

//zatím se vypíše vepsané jméno do konzole
