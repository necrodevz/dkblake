import React, {Component} from 'react'
import {
  Segment,
  Grid,
  
} from 'semantic-ui-react'
import FixedMenu from '../containers/FixedMenu'

export default class Profile extends Component {
  state = {}
  render() {
      const {location} = this.props
    return (
      <div>
        <FixedMenu location={location} />  
        
        
    
      </div>
    )
  }
}
