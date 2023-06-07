import Link from 'next/link';
import styles from '@/styles/Index.module.css';
import Image from 'next/image';
import Head from 'next/head';
import NameForm from '@/components/NameForm';

export default function Setting() {
  return (
    <>
      <Head>
        <title>User profile</title>
      </Head>
      <div className={styles.setting}>
        <NameForm />
        <Image
          src="/Taskmate_Mrk.gif"
          alt="taskmate2"
          className={styles.taskmateSetting}
          width={300}
          height={300}
          priority
        />
        <div className={styles.buttonsContainer}>
          <Link href="/" className={styles.buttonStart}>
            back
          </Link>
          <Link href="/todolist" className={styles.buttonStart}>
            next
          </Link>
        </div>
      </div>
    </>
  );
}
