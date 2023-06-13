import Head from 'next/head';
import NameForm from '@/components/NameForm';
import {
  SettingContainer,
  ButtonsContainer,
  ButtonStyled,
} from '../styles/Setting';
import ButtonStyle from '@/components/Link';
import CharacterSetting from '@/components/Character_Setting';
import { useState } from 'react';

export default function Setting() {
  const [showBubble, setShowBubble] = useState(false);
  return (
    <>
      <Head>
        <title>User profile</title>
      </Head>
      <SettingContainer>
        <NameForm id="nameForm" />
        <CharacterSetting onAnimationComplete={() => showBubble} />
        <ButtonsContainer>
          <ButtonStyle href="/" name="Back" />
          <ButtonStyled form="nameForm">Next</ButtonStyled>
        </ButtonsContainer>
      </SettingContainer>
    </>
  );
}
