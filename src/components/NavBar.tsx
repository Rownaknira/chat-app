import { ChangeEvent, ReactElement } from 'react';
import { useGlobalContext } from '../GlobalContext';
import styles from './../styles/App.module.scss';

type userType = {
  name: string;
  id: number;
};
const users = [{ name: "Joyse", id: 1 }, { name: "Russell", id: 2 }, { name: "Sam", id: 3 }];

export const Navbar = (): ReactElement => {
  const { dispatch } = useGlobalContext();
  const onDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SelectedUser.Set', payload: event.target.value });
  };

  return (
    <div className={styles.nav}>
      <div>
        <span>1. Choose your user</span>
        <select className={styles.dropdown} onChange={onDropdownChange}>
          {users.map((user: userType): ReactElement => {
            return <option value={user.name} key={user.id}>{user.name}</option>
          })}
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
