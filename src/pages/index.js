import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Index.module.css';
import Footer from '../components/Footer/index.js';
import Link from 'next/link';

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
          <Link href="/setting" className={styles.buttonStart}>
            Start
          </Link>
        </div>
        <Image
          src="/Taskmate_Kafe.gif"
          alt="taskmate"
          className={styles.taskmateHomepage}
          width={300}
          height={300}
          priority
        />
      </main>
      <Footer />
    </>
  );
}
