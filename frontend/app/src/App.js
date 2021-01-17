import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { UserInfo, CreateUser } from './User'


const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
});


const App = () => (
  <ApolloProvider client={client}>
    <div style={{
      backgroundColor: '#00000008',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h2>My first Apollo app <span role="img" aria-label="rocket">🚀</span></h2>

      <CreateUser/>
      <UserInfo/>

    </div>
  </ApolloProvider>

);

export default App;
