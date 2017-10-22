class ReactPageGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  
  def create_new_react_page
    create_file "app/javascript/pages/#{name}.jsx",  <<-FILE
import React, {Component} from 'react'

import FixedMenu from '../containers/FixedMenu'

export default class #{name} extends Component {
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
      FILE
  end
end
