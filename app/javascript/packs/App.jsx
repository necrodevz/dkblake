import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

//import {ApolloProvider, ApolloClient} from 'react-apollo'

import DKB from '../dkb'

class App extends Component {
    
    
    render(){
        
        return(
            <BrowserRouter>
                <DKB />
            </BrowserRouter>
        )
    }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})