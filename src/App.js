import React ,{Component} from 'react';
import './App.css';
import Booklist from './components/Booklist'
import AddBook from './components/AddBook';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'



//setup apollo
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


class App extends Component  {
  render(){


  return (
    <ApolloProvider client ={client}>
    <div id="main">
    <h1> ninjas reading list</h1>
    <Booklist />
    
    <AddBook />
    
    
    
    </div>
    </ApolloProvider>
    );
}
}
export default App;
