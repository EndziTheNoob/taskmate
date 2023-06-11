import Head from 'next/head';
import { Inter } from 'next/font/google';
import { TaskmateHomepage, Main, Description, Logo } from '../styles/Index';
import ButtonStyle from '@/components/Link';
import ButtonLink from '@/components/Link';

// uprava fontu
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>TaskMate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <p>Are you ready?</p>
          <ButtonLink href="/login" name="Log In" />
          <ButtonLink href="/register" name="Register" />
        </Description>
        <TaskmateHomepage
          src="/img/Taskmate_Kafe.gif"
          alt="taskmate"
          width={300}
          height={300}
        />
      </Main>
    </>
  );
}
