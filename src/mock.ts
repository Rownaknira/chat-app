import * as Factory from 'factory.ts'
import { faker } from '@faker-js/faker';
import { ChatMessageType, UserType, FETCH_MESSAGES, Query } from '../src/components/Chat';
import { POST_CHAT_MESSAGE } from '../src/components/ChatBox';
import { MockedResponse } from '@apollo/client/testing';

const usernames = ["Joyse", "Russell", "Sam"];

export const UserMock = Factory.Sync.makeFactory<UserType>({
  id: Factory.each(() => faker.datatype.number({ min: 1, max: 3 })),
  name: Factory.each(() => usernames[Math.floor(Math.random() * usernames.length)]),
  avatar: Factory.each(() => faker.image.avatar()),
})

export const ChatMessageMock = Factory.Sync.makeFactory<ChatMessageType>({
  id: Factory.each(() => faker.datatype.number()),
  message: Factory.each(() => faker.random.words()),
  sendTime: Factory.each(() => faker.date.past().toISOString()),
  isSent: true,
  user: Factory.each(() => UserMock.build()),
})

export const ChatQueryMock: MockedResponse<Query> = {
  request: {
    query: FETCH_MESSAGES,
  },
  result: {
      data: {
        chatMessages: ChatMessageMock.buildList(10),
      },
  },
};

export const CreateMessageMock = {
  request: {
    query: POST_CHAT_MESSAGE,
    variables: {
      message: 'Mock lorem ipsum text. And another paragraph.',
      sendTime: '',
      isSent: false,
      userId: 1,
      userName: 'Joyse',
      userAvatar: faker.image.avatar(),
    },
  },
  result: {
    data: {
      createPost: {
        id: 1,
      },
    },
  },
};
