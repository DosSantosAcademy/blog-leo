import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react';

class MenuBar extends React.Component {
  state = { page: 'home' }
  // state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ page: name })
  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
    // const { page } = this.state
  render(){
    const { page } = this.state
    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Menu position='right'>
              <Menu.Item
                name='home'
                active={page === 'home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='jobs'
                active={page === 'jobs'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='about'
                active={page === 'about'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='contact'
                active={page === 'contact'}
                onClick={this.handleItemClick}
              />
              </ Menu.Menu>
          </Menu>
        </Segment>
        <Header as='h2' textAlign='center'>{this.Capitalize(page)}</Header>
      </div>
    )
  }
}

export default MenuBar;