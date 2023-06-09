import Head from 'next/head';
import NameForm from '@/components/NameForm';
import {
  TaskmateSetting,
  SettingContainer,
  ButtonsContainer,
  BubbleSetting,
  BubbleImage,
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
        <BubbleSetting>
          <BubbleImage src="/img/bublina.png" alt="bublina" />
          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              marginTop: '-44px',
              marginLeft: '5px',
            }}
          >
            Hi, I'm ToDoElla! What's your name?
          </span>
        </BubbleSetting>
        <ButtonsContainer>
          <ButtonStyle href="/" name="Back"></ButtonStyle>
          <ButtonStyle href="/todolist" name="Next"></ButtonStyle>
        </ButtonsContainer>
      </SettingContainer>
    </>
  );
}
