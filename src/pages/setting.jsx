import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

const Setting = () => {
  return (
    <div className={styles.setting}>
      <form>
        <input
          type="text"
          placeholder="enter your name"
          className={styles.inputButton}
        />
      </form>
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
  );
};

export default Setting;
