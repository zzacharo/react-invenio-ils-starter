import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import MenuSidebarItem from './components/MenuSidebarItem';
import { subscribe } from '../../../../context';
import { UserStore } from '../../../../plugin';
import AppStore from '../../../../store';

class MenuSidebar extends Component {
  renderMenuItem(item, index) {
    return (
      <MenuSidebarItem header={item.header} items={item.items} key={index} />
    );
  }

  render() {
    console.log('Menu rendered');
    let { menuItems, divided, home, user } = this.props;
    console.log(home, user);

    return (
      <List verticalAlign="middle" divided={divided}>
        {menuItems.map(this.renderMenuItem)}
      </List>
    );
  }
}

MenuSidebar.defaultProps = {
  divided: true,
};

MenuSidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string,
          content: PropTypes.string,
        })
      ),
    })
  ),
  divided: PropTypes.bool,
};

export default subscribe([AppStore, UserStore])(MenuSidebar);
