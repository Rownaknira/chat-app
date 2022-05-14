import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {
//   ApolloClient,
//   ApolloLink,
//   ApolloProvider,
//   createHttpLink,
//   InMemoryCache
// } from '@apollo/client';
// import { schemaLink } from './schema';
import { Provider } from './Provider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const httpLink = createHttpLink({
//   // TODO: need to update with original backend GraphQL API endpoint
//   uri: 'http://localhost:4000'
// });

// const client = new ApolloClient({
//   // link: httpLink,
//   link: ApolloLink.from([httpLink, (schemaLink as unknown) as ApolloLink]),
//   cache: new InMemoryCache()
// });

root.render(
  <React.StrictMode>
    <Provider useMocks>
      <App />
    </Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
