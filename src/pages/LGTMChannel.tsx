import { Topbar } from '../components/TopBar';
import { Navbar } from '../components/NavBar';
import { Chat } from '../components/Chat';
import styles from '../styles/App.module.scss';

export const LGTMChannel = () => {
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.main}>
        <div className={styles.main__left}><Navbar /></div>
        <div className={styles.main__right}><Chat /></div>
      </div>
    </div>
  );
}
