import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import BookList from '../../components/BookList';
import MenuSidebar from './components/MenuSidebar';

import './Home.css';
import { SIDEBAR_MENU_ITEMS } from '../../constants';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Grid columns="equal" className="pl-1vw">
          <Grid.Column width={2}>
            <MenuSidebar menuItems={SIDEBAR_MENU_ITEMS} />
          </Grid.Column>
          <Grid.Column className="book-list-container">
            <BookList title="Featured" />
            <BookList title="Recently Added" />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

Home.displayName = 'Home';
Home.propTypes = {
  aboutReducer: PropTypes.object,
};
