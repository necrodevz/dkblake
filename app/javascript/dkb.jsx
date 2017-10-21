// import base modules
import React, {Component} from 'react'
import {Route} from 'react-router-dom'

// import custom modules
import Home from './pages/Home'


// main function
const DKB = () => (
        <div>
            <Route path='/' component={Home} />
        </div>
)

export default DKB