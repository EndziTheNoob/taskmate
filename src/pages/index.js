import Head from 'next/head';
import { Inter } from 'next/font/google';
import {
  TaskmateHomepage,
  Main,
  Description,
  Logo,
  ButtonsContainerLog,
} from '../styles/Index';
import { ButtonLink } from '@/components/Link';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

// uprava fontu
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>TaskMate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:description"
          content="Simple, clear and fun to-do list that will help you manage tasks easily with a touch of pixel art. Are you ready?"
        />
        <meta property="og:image" content={'img/preview.png'} />
        <meta
          property="og:url"
          content="https://taskmate-project.vercel.app/"
        />
      </Head>
      <Main>
        <Description>
          <Logo
            src="/img/logo_bublina.png"
            alt="logo"
            width={500}
            height={150}
          />
          <p>To-Do list for those who need to push a little bit.</p>
          <p>Absolutely free.</p>
          <p>
            <MdOutlineArrowForwardIos
              size={15}
              style={{ marginRight: '7px' }}
            />
            Are you ready?
            <MdOutlineArrowBackIosNew size={15} style={{ marginLeft: '7px' }} />
          </p>
          <ButtonsContainerLog>
            <ButtonLink href="/login" name="Log In" />
            <ButtonLink href="/register" name="Register" />
          </ButtonsContainerLog>
        </Description>
        <TaskmateHomepage src="/img/Taskmate_Kafe.gif" alt="taskmate" />
      </Main>
    </>
  );
}
