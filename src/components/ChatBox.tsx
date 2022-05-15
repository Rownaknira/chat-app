import { ChangeEvent, ReactElement, useCallback, useContext, useState } from 'react';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { GlobalContext } from '../GlobalContext';
import { faker } from '@faker-js/faker';
import { useMutation, gql } from '@apollo/client';
import styles from './../styles/App.module.scss';

type chatMessageInputType = {
  message: string;
  sendTime: string;
  isSent: boolean;
  userId: number;
  userName: string;
  userAvatar: string;
};

export const POST_CHAT_MESSAGE = gql`
  mutation createMessage($message: String!, $sendTime: String!, $isSent: Boolean!, $userId: Number!, $userName: String!, $userAvatar: String!) {
    createMessage(
      input: {
        message: $message, 
        sendTime: $sendTime, 
        isSent: $isSent,
        user: {
          id: $userId,
          name: $userName,
          avatar: $userAvatar,
        }
      }
    ) {
      id
    }
  }
`;

export const ChatBox = (): ReactElement => {
  const { state: { selectedUser } } = useContext(GlobalContext);
  const [createMessage, data] = useMutation(POST_CHAT_MESSAGE);
  // TODO: need to update user with logged in user's information
  const [chatMessage, setChatMessage] = useState<chatMessageInputType>({
    message: '',
    sendTime: '',
    isSent: false,
    userId: selectedUser.id,
    userName: selectedUser.name,
    userAvatar: faker.image.avatar(),
   });

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>)=> {
    setChatMessage({ ...chatMessage, [event.target.name]: event.target.value});
  }

  const handleSubmit = useCallback((e: any)=> {
    e.preventDefault();
    setChatMessage({ ...chatMessage, sendTime: (new Date()).toString() });
    const mockData = {
      message: 'Mock lorem ipsum text. And another paragraph.',
      sendTime: '',
      isSent: false,
      userId: 1,
      userName: 'Joyse',
      userAvatar: faker.image.avatar(),
    };
    createMessage({variables: { ...mockData }});
  }, [chatMessage, createMessage]);

  console.log(data);

  return (
    <div className={styles.chatbox}>
      <form onSubmit={handleSubmit}>
        <textarea
          rows={3}
          placeholder="Type your message here..."
          onChange={handleOnChange}
          name="message"
          value={chatMessage.message}
        >
        </textarea>
        <button type="submit" className={styles.btn}>
          Send message
          <span className={styles.icon}><SendSharpIcon /></span>
        </button>
      </form>
    </div>
  );
}
