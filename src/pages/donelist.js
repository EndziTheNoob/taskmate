import styles from '@/styles/Index.module.css';
import Menu from '../components/Menu/index.js';
import Head from 'next/head.js';

export default function Donelist() {
  return (
    <>
      <Head>
        <title>Completed tasks</title>
      </Head>
      <div className={styles.setting}>
        <nav className={styles.hamburgerMenu}>
          <Menu />
        </nav>
      </div>
    </>
  );
}
