import Menu from '../components/Menu/index.js';
import Head from 'next/head.js';
import { Clouds, CloudsContainer } from '../styles/Motto.js';

export default function Motto() {
  return (
    <>
      <Head>
        <title>Motto</title>
      </Head>
      <div>
        <nav>
          <Menu />
        </nav>
        <CloudsContainer>
          <Clouds src="/img/Clouds.png" alt="clouds" />
        </CloudsContainer>
      </div>
    </>
  );
}
