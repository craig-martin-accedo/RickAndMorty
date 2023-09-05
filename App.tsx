import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import TabNavigation from './navigation/TabNavigation';
import store from './redux/store';

// Initialise Apollo Client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}
