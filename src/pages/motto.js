import styled from 'styled-components';
import Menu from '../components/Menu/index.js';
import Head from 'next/head.js';

export const Heading = styled.h1`
  color: blue;
`;

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
        <Heading>Zkouším styled component</Heading>
      </div>
    </>
  );
}
