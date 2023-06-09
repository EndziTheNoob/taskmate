import Menu from '../components/Menu/index.js';
import Head from 'next/head.js';
import { ServerStyleSheet } from 'styled-components'

export default function DoneList() {
  return (
    <>
      <Head>
        <title>Tasks</title>
      </Head>
      <div>
        <nav>
          <Menu />
        </nav>
      </div>
    </>
  );
}
