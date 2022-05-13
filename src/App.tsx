import { useReducer } from 'react';
import { Topbar } from './components/TopBar';
import { Navbar } from './components/NavBar';
import { Chat } from './components/Chat';
import { GlobalContext, initialState, reducer } from './GlobalContext';
import styles from './styles/App.module.scss';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className={styles.container}>
        <Topbar />
        <div className={styles.main}>
          <div className={styles.main__left}><Navbar /></div>
          <div className={styles.main__right}><Chat /></div>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
