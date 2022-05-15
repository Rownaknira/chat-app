import React, { ReactElement, ReactNode} from 'react';
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { ChatQueryMock, CreateMessageMock } from './mock';
import { MockedProvider } from '@apollo/client/testing';
import { schemaLink } from './schema';

interface ProviderProps {
  useMocks?: boolean,
  children: ReactNode | ReactElement,
}

export const cache = new InMemoryCache()
const link = createHttpLink({
  /** Your graphql endpoint */
  uri: 'http://localhost:4000/',
})

export const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([link, (schemaLink as unknown) as ApolloLink]),
  cache,
  resolvers: {},
  defaultOptions: {
    query: {
      errorPolicy: 'all',
    },
  },
})

export const Provider: React.FC<ProviderProps> = ({ useMocks, children }) => {
  if (useMocks)
    return (
      <MockedProvider mocks={[ChatQueryMock, CreateMessageMock]} addTypename={false}>
        <>{children}</>
      </MockedProvider>
    )
  return (
    <ApolloProvider client={client}>
      <>{children}</>
    </ApolloProvider>
  )
};
