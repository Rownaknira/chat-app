import * as Factory from 'factory.ts'
import { faker } from '@faker-js/faker';
import { ChatMessageType, User, FETCH_MESSAGES, Query } from '../src/components/Chat';
import { MockedResponse } from '@apollo/client/testing';

export const UserMock = Factory.Sync.makeFactory<User>({
    id: Factory.each(() => faker.random.number()),
    name: Factory.each(() => faker.name.firstName()),
    avatar: Factory.each(() => faker.image.avatar()),
})

export const ChatMessageMock = Factory.Sync.makeFactory<ChatMessageType>({
    message: Factory.each(() => faker.random.words()),
    sendTime: Factory.each(() => faker.date.past().toISOString()),
    isSent: true,
    user: Factory.each(() => UserMock.build()),
})

export const booksQueryMock: MockedResponse<Query> = {
    request: {
      query: FETCH_MESSAGES,
    },
    result: {
        data: {
          chatMessages: ChatMessageMock.buildList(10),
        },
    },
}
