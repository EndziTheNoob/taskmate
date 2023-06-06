import styles from '@/styles/Index.module.css';
import Menu from '../components/Menu/index.js';
import Image from 'next/image';

export default function Todolist() {
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
}
