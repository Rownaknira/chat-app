import { ReactElement } from 'react';
import styles from './../styles/App.module.scss';

export const Topbar = (): ReactElement => {
  return (
    <div className={styles.topbar}>
      <div>
        <span className={styles.header1}>1 day chat App</span>
      </div>
      <div>
        <span className={styles.header2}>All messages will be deleted at every 00:00 UTC</span>
      </div>
    </div>
  );
}
