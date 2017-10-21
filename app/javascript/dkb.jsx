// import base modules
import React, {Component} from 'react'
import {Route} from 'react-router-dom'

// import custom modules
import Home from './pages/Home'
import Profile from './pages/Profile'

// main function
const DKB = () => (
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
        </div>
)

export default DKB