import Head from 'next/head';
import NameForm from '@/components/NameForm';
import {
  SettingContainer,
  ButtonsContainer,
  ButtonStyled,
} from '../styles/Setting';
import { ButtonLinkSetting } from '@/components/Link';
import CharacterSetting from '@/components/Character_Setting';

export default function Setting() {
  return (
    <>
      <Head>
        <title>User profile</title>
      </Head>
      <SettingContainer>
        <NameForm id="nameForm" />
        <CharacterSetting />
        <ButtonsContainer>
          <ButtonLinkSetting href="/" name="Back" />
          <ButtonStyled form="nameForm">Next</ButtonStyled>
        </ButtonsContainer>
      </SettingContainer>
    </>
  );
}
