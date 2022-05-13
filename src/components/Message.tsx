import React, { ReactElement } from 'react';
import { messageType } from './Chat';
import styles from './../styles/App.module.scss';

type Props = {
  chatMessage: messageType;
};

export const Message = ({ chatMessage }: Props): ReactElement => {
  const messageLines: string[] = chatMessage.message.split("<br />");
  return (
    <div className={styles.message}>
      <div className={styles.avatar}>
        <img src={ require(`../images/${chatMessage.avatar}`) } alt="User" />
        <span>{chatMessage.name}</span>
      </div>
      <div className={styles.arrow_left}></div>
      <div className={styles.content}>
        {messageLines.map((text: string) => {
          return <React.Fragment key={text}><span>{text}</span><br /></React.Fragment>
        })}
      </div>
      <div className={styles.time}>
        <span>{chatMessage.sendTime}</span>
      </div>
    </div>
  );
}
