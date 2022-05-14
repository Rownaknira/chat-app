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
`
export const schemaLink = new SchemaLink({ schema: makeExecutableSchema({ typeDefs }) })
