import React from 'react';
import styles from '@/styles/Home.module.css';
import Menu from '../components/Menu/index.js';
import Image from 'next/image';

const Todolist = () => {
  return (
    <div className={styles.setting}>
      <nav className={styles.hamburgerMenu}>
        <Menu />
      </nav>
      <Image
        src="/Taskmate_Mrk.gif"
        alt="taskmate2"
        className={styles.taskmateTodo}
        width={300}
        height={300}
        priority
      />
    </div>
  );
};

export default Todolist;
