import React, { Component } from 'react';
import { Icon, Menu, Dropdown } from 'semantic-ui-react';

import SearchBar from './components/SearchBar';

import './Header.css';

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const trigger = (
      <span>
        <Icon name="user" /> Hello, Bob
      </span>
    );

    return (
      <Menu stackable borderless fluid size="massive">
        <Menu.Item header>CDS Books</Menu.Item>
        <Menu.Item>
          <SearchBar />
        </Menu.Item>
        <Menu.Item position="right">
          <Dropdown item trigger={trigger}>
            <Dropdown.Menu>
              <Dropdown.Item>Your Requests</Dropdown.Item>
              <Dropdown.Item>Your Loans</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    );
  }
}

Header.displayName = 'Header';
// Header.propTypes = {};
