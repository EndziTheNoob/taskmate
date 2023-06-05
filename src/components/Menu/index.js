import { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Link from 'next/link';
import styles from './Index.module.css';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.HamburgerMenu}>
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={handleClick}
        width={24}
        height={18}
        strokeWidth={2}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />
      {isOpen && (
        <div className={styles.hamburgerContainer}>
          <Link href="/todolist">tasks</Link>
          <Link href="/donelist">done</Link>
          <Link href="/motto">motto</Link>
        </div>
      )}
    </div>
  );
}
