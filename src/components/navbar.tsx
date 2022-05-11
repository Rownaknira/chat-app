import { ReactElement } from 'react';
import styles from './../styles/App.module.scss';

export const Navbar = (): ReactElement => {
  return (
    <div className={styles.nav}>
      <div>
        <span>1. Choose your user</span>
        <select className={styles.dropdown}>
          <option>Joyse</option>
        </select>
      </div>
      <div>
        <span>2. Choose your Channel</span>
        <div>
          <ul>
            <li>General Channel</li>
            <li>Technology Channel</li>
            <li>LGTM Channel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
