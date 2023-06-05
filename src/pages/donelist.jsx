import React from 'react';
import styles from '@/styles/Home.module.css';
import Menu from '../components/Menu/index.js';

const Donelist = () => {
  return (
    <div className={styles.setting}>
      <nav className={styles.hamburgerMenu}>
        <Menu />
      </nav>
    </div>
  );
};

export default Donelist;
