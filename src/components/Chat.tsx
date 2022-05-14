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
  id: number;
  message: String;
  sendTime: String;
  isSent: Boolean;
  user: User;
};

export type User = {
  id: number;
  name: String;
  avatar: String;
};

export type Query = {
  chatMessages: Array<ChatMessageType>;
};

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
          return chatMessage.user.name === selectedUser
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
