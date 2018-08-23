import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import BookResults from './components/BookResults';
import MenuSidebar from './components/MenuSidebar';

import bookListMock from './BookList.mock';
import { SIDEBAR_MENU_ITEMS } from '../../constants';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Grid columns="equal">
          <Grid.Column width={2} className="sidebar-container">
            <MenuSidebar menuItems={SIDEBAR_MENU_ITEMS} />
          </Grid.Column>
          <Grid.Column className="book-list-container">
            <BookResults data={bookListMock} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
