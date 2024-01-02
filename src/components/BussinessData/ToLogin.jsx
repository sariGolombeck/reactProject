import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { Outlet, Link } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css';

export default class ToLogin extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
          <Menu.Item
          name='Login'
            active={activeItem === 'home'}   
            as={Link}
            to='admin'
            
            />
           
         
        </Menu> <Outlet/>
      </div>
    )
  }
}