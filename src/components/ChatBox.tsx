import { ReactElement } from 'react';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import styles from './../styles/App.module.scss';

export const ChatBox = (): ReactElement => {
  return (
    <div className={styles.chatbox}>
      <textarea rows={3} placeholder="Type your message here..."></textarea>
      <button type="button" className={styles.btn}>
        Send message
        <span className={styles.icon}><SendSharpIcon /></span>
      </button>
    </div>
  );
}
