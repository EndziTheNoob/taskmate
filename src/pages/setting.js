import Head from 'next/head';
import NameForm from '@/components/NameForm';
import {
  TaskmateSetting,
  SettingContainer,
  ButtonsContainer,
  BubbleSetting,
  BubbleImage,
  ButtonStyled,
} from '../styles/Setting';
import ButtonStyle from '@/components/Link';
import Template from '@/components/ChangeTemplate';

export default function Setting() {
  return (
    <>
      <Head>
        <title>User profile</title>
      </Head>
      <SettingContainer>
        <NameForm id="nameForm" />
        <TaskmateSetting
          src="/img/Taskmate_Mrk.gif"
          alt="taskmate2"
          width={300}
          height={300}
        />
        <Template />
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
            Hi, I am Todoella! What is your name?
          </span>
        </BubbleSetting>
        <ButtonsContainer>
          <ButtonStyle href="/" name="Back" />
          <ButtonStyled form="nameForm">Next</ButtonStyled>
        </ButtonsContainer>
      </SettingContainer>
    </>
  );
}
