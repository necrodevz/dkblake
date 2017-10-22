import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {ApolloProvider, ApolloClient, createNetworkInterface} from 'react-apollo'

import DKB from '../dkb'

const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql'
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    const token = process.env.GITHUB_TOKEN
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface: networkInterface
});

const store = createStore(
  combineReducers({
    apollo: client.reducer(),
  }),
  {}, // initial state
  compose(
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

class App extends Component {
    
    
    render(){
        
        return(
            <ApolloProvider store={store} client={client}>
                <BrowserRouter>
                    <DKB />
                </BrowserRouter>
            </ApolloProvider>
        )
    }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})