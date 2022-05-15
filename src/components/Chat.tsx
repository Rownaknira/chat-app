import React, { ReactElement, useContext } from 'react';
import { ChatBox } from './ChatBox';
import { Message } from './Message';
import { OwnMessage } from './OwnMessage';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import { GlobalContext } from '../GlobalContext';
import { useQuery, gql } from '@apollo/client';
import styles from './../styles/App.module.scss';

export type ChatMessageType = {
  id?: number;
  message: string;
  sendTime: string;
  isSent: boolean;
  user: UserType;
};

export type UserType = {
  id?: number;
  name: string;
  avatar: string;
};

export type Query = {
  chatMessages: Array<ChatMessageType>;
};

// Sample chat message
// const messages: ChatMessageType[] = [
//   {
//     message: "Hello, I'm Russell. <br />How can I help you today?", sendTime: "08:55", isSent: true, user: { id: 2, name: "Russell", avatar: "Russell.png" }
//   },
//   {
//     message: "Hi, Russell <br />I need more information about Developer Plan.", sendTime: "08:56", isSent: true, user: { id: 1, name: "Joyse", avatar: "Joyse.png"}
//   },
//   {
//     message: "Are we meeting today? <br />Project has been already finished and I have results to show you. ", sendTime: "08:57", isSent: true, user: { id: 3, name: "Sam", avatar: "Sam.png" }
//   },
//   {
//     message: "Well I am not sure. <br />I have results to show you.", sendTime: "08:59", isSent: true, user: { id: 1, name: "Joyse", avatar: "Joyse.png"}
//   },
//   {
//     message: "Hey, can you receive my chat?", sendTime: "09:02", isSent: false, user: { id: 1, name: "Joyse", avatar: "Joyse.png" }
//   }, 
// ];

export const FETCH_MESSAGES = gql`
    {
      chatMessages(limit: 10) {
        id
        message
        sendTime
        isSent
        user {
          id
          name
          avatar
        }
      }
    }
  `
  ;

export const Chat = (): ReactElement => {
  const { state: { selectedUser } } = useContext(GlobalContext);

  const { loading, error, data } = useQuery<Query>(FETCH_MESSAGES);
  if (loading) return <span>'Loading...';</span>
  if (error) return <span>`Error! ${error.message}`;</span>

  const messages = data === undefined ? [] : data.chatMessages;
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
        {messages.map((chatMessage: ChatMessageType) => {
          return chatMessage.user.name === selectedUser.name
          ? <React.Fragment key={chatMessage.id}><OwnMessage chatMessage={chatMessage}/></React.Fragment>
          : <React.Fragment key={chatMessage.id}><Message chatMessage={chatMessage} /></React.Fragment>
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
