import React, { ReactElement, useContext, useState } from 'react';
import { ChatBox } from './ChatBox';
import { LIMIT } from '../Constants';
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

export const FETCH_MESSAGES = gql`
  query chatMessages($limit: Int, $offset: Int) {
    chatMessages(limit: $limit, start: $offset) {
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
  const [offset, setOffset] = useState<number>(0);

  const { loading, error, data } = useQuery<Query>(FETCH_MESSAGES, { variables: { limit: LIMIT, offset: offset } });
  if (loading) return <span>'Loading...';</span>
  if (error) return <span>`Error! ${error.message}`;</span>

  const messages = data === undefined ? [] : data.chatMessages;
  const handlePagination = (direction: string) => {
    if (direction === "upward") {
      setOffset(offset + LIMIT);
    } else {
      const newOffset = offset >= LIMIT ? offset - LIMIT : offset;
      setOffset(newOffset);
    }
  };

  return (
    <div className={styles.chat}>
      <div className={styles.chat__heading}>
        <span className={styles.title}>LGTM Channel</span>
      </div>
      <div className={styles.chat__content}>
        <div className={styles.upward}>
          <button type="button" className={styles.btn} onClick={e => handlePagination("upward")}>
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
          <button type="button" className={styles.btn} onClick={e => handlePagination("downward")}>
            <span>Read more</span>
            <span className={styles.icon}><ArrowDownwardSharpIcon /></span>
          </button>
        </div>
        <ChatBox />
      </div>
    </div>
  );
}
