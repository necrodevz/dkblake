class ContainerGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  
  def create_new_react_container
    create_file "app/javascript/containers/#{name}.jsx",  <<-FILE
import React, {Component} from 'react'
import {graphql, gql, compose} from 'react-apollo'

const #{name} = ({location}) => (
      <div>
    
      </div>
)

export default #{name}
      FILE
  end
end
