import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Footer from './Footer.jsx';

// uprava fontu
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>TaskMate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.description}>
          <Image
            src="/logo_bublina.png"
            alt="logo"
            className={styles.taskmatelogo}
            width={600}
            height={200}
            priority
          />
          <p>
            To-Do list for those who need to push a little bit.
            <br />
            Absolutely free.
            <br />
            Are you ready?
          </p>
          <a className={styles.buttonStart}>Start</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
