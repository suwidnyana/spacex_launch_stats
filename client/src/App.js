import React, {Component}from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import logo from './logo.png';
import './App.css';
import Launches from './Components/Launches'
import Launch from './Components/Launch'

import { BrowserRouter as Router, Route} from 'react-router-dom'

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <Router>
            <div className="container">
            <img src={logo} 
              alt="SPACEX" 
              style={{width: 300, display: 'block', margin: 'auto' }}
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
            </div>
          </Router>
      </ApolloProvider>
    );
  }
}

export default App;
