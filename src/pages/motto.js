import Menu from '../components/Menu/index.js';
import Head from 'next/head.js';
import { Clouds, CloudsContainer, QuoteStyle } from '../styles/Motto.js';

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
          <QuoteStyle>
            <p>Tady bude vložen citát</p>
          </QuoteStyle>
        </CloudsContainer>
      </div>
    </>
  );
}
