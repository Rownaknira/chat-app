import { Topbar } from '../components/TopBar';
import { Navbar } from '../components/NavBar';
import { Technology } from '../components/Technology';
import styles from '../styles/App.module.scss';

export const TechnologyChannel = () => {
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.main}>
        <div className={styles.main__left}><Navbar /></div>
        <div className={styles.main__right}><Technology /></div>
      </div>
    </div>
  );
}
