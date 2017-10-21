import React, {Component} from 'react'

import FixedMenu from './shared/FixedMenu'

export default class Home extends Component {
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