import { Topbar } from './components/topbar';
import { Navbar } from './components/navbar';
import styles from './styles/App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.main}>
        <div className={styles.main__left}><Navbar /></div>
        <div className={styles.main__right}></div>
      </div>
    </div>
  );
}

export default App;
