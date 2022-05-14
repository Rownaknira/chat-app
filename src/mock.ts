import * as Factory from 'factory.ts'
import { faker } from '@faker-js/faker';
import { ChatMessageType, User, FETCH_MESSAGES, Query } from '../src/components/Chat';
import { MockedResponse } from '@apollo/client/testing';

const usernames = ["Joyse", "Russell", "Sam"];

export const UserMock = Factory.Sync.makeFactory<User>({
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
