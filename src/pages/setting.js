import Link from 'next/link';
import Head from 'next/head';
import NameForm from '@/components/NameForm';
import {
  TaskmateSetting,
  SettingContainer,
  ButtonsContainer,
} from '../styles/Setting';

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
          <Link href="/">back</Link>
          <Link href="/todolist">next</Link>
        </ButtonsContainer>
      </SettingContainer>
    </>
  );
}
