import React, { ReactElement } from 'react';
import { ChatMessageType } from './Chat';
import { padTo2Digits } from '../Helpers';
import styles from './../styles/App.module.scss';

type Props = {
  chatMessage: ChatMessageType;
};

export const Message = ({ chatMessage }: Props): ReactElement => {
  const messageLines: string[] = chatMessage.message.split("<br />");
  const date = new Date(chatMessage.sendTime as string);
  const hourMin = padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes());

  return (
    <div className={styles.message}>
      <div className={styles.avatar}>
        {/* <img src={ require(`../images/${chatMessage.user.avatar}`) } alt="User" /> */}
        <img src={`${chatMessage.user.avatar}`} alt="User" />
        <span>{chatMessage.user.name}</span>
      </div>
      <div className={styles.arrow_left}></div>
      <div className={styles.content}>
        {messageLines.map((text: string) => {
          return <React.Fragment key={text}><span>{text}</span></React.Fragment>
        })}
      </div>
      <div className={styles.time}>
        <span>{hourMin}</span>
      </div>
    </div>
  );
}
