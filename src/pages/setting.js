import Head from 'next/head';
import NameForm from '@/components/NameForm';
import {
  TaskmateSetting,
  SettingContainer,
  ButtonsContainer,
} from '../styles/Setting';
import ButtonStyle from '@/components/Link';

export default function Setting() {
  return (
    <>
      <Head>
        <title>User profile</title>
      </Head>
      <SettingContainer>
        <NameForm />
        <TaskmateSetting
          src="/img/Taskmate_Mrk.gif"
          alt="taskmate2"
          width={300}
          height={300}
        />
        <ButtonsContainer>
          <ButtonStyle href="/" name="Back"></ButtonStyle>
          <ButtonStyle href="/todolist" name="Next"></ButtonStyle>
        </ButtonsContainer>
      </SettingContainer>
    </>
  );
}
