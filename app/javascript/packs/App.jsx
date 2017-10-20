import React, {Component} from 'react'
import ReactDOM from 'react-dom'
//import {ApolloProvider, ApolloClient} from 'react-apollo'

import Home from '../containers/Home'

class App extends Component {
    
    
    render(){
        
        return(
            <Home />   
        )
    }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})