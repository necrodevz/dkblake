import React, {Component} from 'react'
import {Menu, Container} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const FixedMenu = ({location:{pathname}}) => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Menu position='right'>
        <Menu.Item as={Link} to='/' active={pathname == '/'}>Home</Menu.Item>
        <Menu.Item as={Link} to='/profile' active={pathname == '/profile'}>Profile</Menu.Item>
        <Menu.Item as={Link} to='/projects' active={pathname == '/projects'}>Projects</Menu.Item>
        <Menu.Item as={Link} to='/schedule' active={pathname == '/schedule'}>Schedule</Menu.Item>
        <Menu.Item as={Link} to='/shop' active={pathname == '/shop'}>Shop</Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default FixedMenu