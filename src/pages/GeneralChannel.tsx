import { Topbar } from '../components/TopBar';
import { Navbar } from '../components/NavBar';
import { General } from '../components/General';
import styles from '../styles/App.module.scss';

export const GeneralChannel = () => {
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.main}>
        <div className={styles.main__left}><Navbar /></div>
        <div className={styles.main__right}><General /></div>
      </div>
    </div>
  );
}
