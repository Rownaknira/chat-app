import { ChangeEvent, ReactElement } from 'react';
import { USERS } from '../Constants';
import { useGlobalContext } from '../GlobalContext';
import { NavLink } from "react-router-dom";
import styles from './../styles/App.module.scss';

type userType = {
  name: string;
  id: number;
};



export const Navbar = (): ReactElement => {
  const { dispatch } = useGlobalContext();
  const onDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'SelectedUser.Set',
      payload: {
        id: USERS.find(item => item.name === event.target.value)?.id ?? 1,
        name: event.target.value
      }
    });
  };

  return (
    <div className={styles.nav}>
      <div>
        <span>1. Choose your user</span>
        <select className={styles.dropdown} onChange={onDropdownChange}>
          {USERS.map((user: userType): ReactElement => {
            return <option value={user.name} key={user.id}>{user.name}</option>
          })}
        </select>
      </div>
      <div>
        <span>2. Choose your Channel</span>
        <div className={styles.menu}>
          <div>
            <ul>
              <li>
                <NavLink to="/general-channel" style={({ isActive }) => (isActive ? { background: "linear-gradient(#FFF, #e5e5e5)" } : {})}>
                  General Channel
                </NavLink>
              </li>
              <li>
                <NavLink to="/technology-channel" style={({ isActive }) => (isActive ? { background: "linear-gradient(#FFF, #e5e5e5)" } : {})}>
                  Technology Channel
                </NavLink>
              </li>
              <li>
                <NavLink to="/lgtm-channel" style={({ isActive }) => (isActive ? { background: "linear-gradient(#FFF, #e5e5e5)" } : {})}>
                  LGTM Channel
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
