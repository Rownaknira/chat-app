import React, { ReactElement, useContext } from 'react';
import { ChatBox } from './ChatBox';
import { Message } from './Message';
import { OwnMessage } from './OwnMessage';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import { GlobalContext } from '../GlobalContext';
import styles from './../styles/App.module.scss';

export type messageType = {
  name: string,
  avatar: string,
  message: string,
  sendTime: string,
  status: boolean,
};

// Sample chat message
const messages: messageType[] = [
  {
    name: "Russell", avatar: "Russell.png", message: "Hello, I'm Russell. <br />How can I help you today?", sendTime: "08:55", status: true
  },
  {
    name: "Joyse", avatar: "Joyse.png", message: "Hi, Russell <br />I need more information about Developer Plan.", sendTime: "08:56", status: true
  },
  {
    name: "Sam", avatar: "Sam.png", message: "Are we meeting today? <br />Project has been already finished and I have results to show you. ", sendTime: "08:57", status: true
  },
  {
    name: "Joyse", avatar: "Joyse.png", message: "Well I am not sure. <br />I have results to show you.", sendTime: "08:59", status: true
  },
  {
    name: "Joyse", avatar: "Joyse.png", message: "Hey, can you receive my chat?", sendTime: "09:02", status: false
  }, 
];

export const Chat = (): ReactElement => {
  const { state: { selectedUser } } = useContext(GlobalContext);
  return (
    <div className={styles.chat}>
      <div className={styles.chat__heading}>
        <span className={styles.title}>LGTM Channel</span>
      </div>
      <div className={styles.chat__content}>
        <div className={styles.upward}>
          <button type="button" className={styles.btn}>
            <span>Read more</span>
            <span className={styles.icon}><ArrowUpwardSharpIcon /></span>
          </button>
          
        </div>
        {messages.map((chatMessage: messageType) => {
          return chatMessage.name === selectedUser
          ? <React.Fragment key={chatMessage.sendTime}><OwnMessage chatMessage={chatMessage}/></React.Fragment>
          : <React.Fragment key={chatMessage.sendTime}><Message chatMessage={chatMessage} /></React.Fragment>
        })}
        <div className={styles.downward}>
          <button type="button" className={styles.btn}>
            <span>Read more</span>
            <span className={styles.icon}><ArrowDownwardSharpIcon /></span>
          </button>
        </div>
        <ChatBox />
      </div>
    </div>
  );
}
