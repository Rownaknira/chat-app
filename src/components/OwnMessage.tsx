import React, { ReactElement } from 'react';
import { messageType } from './Chat';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import ErrorSharpIcon from '@mui/icons-material/ErrorSharp';
import styles from './../styles/App.module.scss';

type Props = {
  chatMessage: messageType;
};

export const OwnMessage = ({ chatMessage }: Props): ReactElement => {
  const messageLines: string[] = chatMessage.message.split("<br />");
  return (
    <div className={styles.own_message}>
      <div className={styles.avatar}>
        <img src={ require(`../images/${chatMessage.avatar}`) } alt="User" />
        <span>{chatMessage.name}</span>
      </div>
      <div className={styles.arrow_right}></div>
      <div className={styles.content}>
        {messageLines.map((text: string) => {
          return <React.Fragment key={text}><span>{text}</span><br /></React.Fragment>
        })}
      </div>
      <div className={styles.time}>
        <span>{chatMessage.sendTime}</span>
        {chatMessage.status
          ? <span className={styles.done}><CheckCircleSharpIcon /></span>
          : <span className={styles.sent_error}><ErrorSharpIcon /></span>
        }
        <span>{chatMessage.status ? "Sent" : "Error"}</span>
      </div>
    </div>
  );
}
