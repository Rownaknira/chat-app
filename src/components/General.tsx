import { ReactElement } from 'react';
import styles from './../styles/App.module.scss';

export const General = (): ReactElement => {
  return (
    <div className={styles.chat}>
      <div className={styles.chat__heading}>
        <span className={styles.title}>General Channel</span>
      </div>
    </div>
  );
}
