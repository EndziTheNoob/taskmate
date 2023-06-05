import styles from '@/styles/Index.module.css';
import Menu from '../components/Menu/index.js';

export default function Motto() {
  return (
    <div className={styles.setting}>
      <nav className={styles.hamburgerMenu}>
        <Menu />
      </nav>
    </div>
  );
}
