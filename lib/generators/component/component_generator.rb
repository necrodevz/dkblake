class ComponentGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)
  
  def create_new_react_container
    create_file "app/javascript/container/#{name}.jsx",  <<-FILE
import React from 'react'

const #{name} = () => (
      <div>
        
      </div>
)

export default #{name}
      FILE
  end
end
