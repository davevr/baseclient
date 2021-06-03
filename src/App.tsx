import React from 'react';
import './App.scss';
import MainStage from './components/MainStage';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import {RcThemeProvider} from '@ringcentral/juno';
import { ApolloClient, InMemoryCache, gql} from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});


function App() {
  return (
    <RcThemeProvider>
      <ApolloProvider client={client}>
      <div className="App">
        <TopBar></TopBar>
        <MainStage></MainStage>
        <BottomBar></BottomBar>
      </div>
      </ApolloProvider>
    </RcThemeProvider>
  );
}

export default App;
