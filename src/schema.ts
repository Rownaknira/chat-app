import { SchemaLink } from '@apollo/client/link/schema'
import { makeExecutableSchema } from '@graphql-tools/schema'

import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    chatMessages: [ChatMessage!]!
  }
  type ChatMessage {
    id: ID!
    message: String!
    sendTime: String!
    isSent: Boolean!
    user: User!
  }
  type User {
    id: ID!
    name: String!
    avatar: String!
  }

  input MessageInput {
    message: String
    sendTime: String
    isSent: Boolean
    userId: ID
    userName: String
    userAvatar: String
  }

  type Mutation {
    createMessage(input: MessageInput): ChatMessage
  }
`
export const schemaLink = new SchemaLink({ schema: makeExecutableSchema({ typeDefs }) })
