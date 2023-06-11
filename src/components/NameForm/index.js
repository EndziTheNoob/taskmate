import React, { useState } from 'react';
import { InputStyle, FormStyle, Label } from './styled';
import { SaveUserName } from '@/services/user';
import { useRouter } from 'next/router';
import ChangeTemplate, { Palette } from '../ChangeTemplate';

export default function NameForm({ id }) {
  const router = useRouter();

  const [name, setName] = useState('');
  const [color, setColor] = useState(Palette[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted name:', name);
    SaveUserName(name);
    console.log(color);
    setName('');
    router.push('/todolist');
  };

  return (
    <>
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
      <ChangeTemplate
        onSelect={(color) => setColor(color)}
        defaultColor={Palette[0]}
      />
    </>
  );
}

//zatím se vypíše vepsané jméno do konzole
