import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import BookList from '../../components/BookList';
import MenuSidebar from './components/MenuSidebar';

import bookListMock from './BookList.mock';
import { SIDEBAR_MENU_ITEMS } from '../../constants';

import './Home.css';

export default class Home extends Component {
  renderBookLists(data) {
    return <BookList data={data} key={data.id} />;
  }

  render() {
    return (
      <div className="home-container">
        <Grid columns="equal">
          <Grid.Column width={2} className="sidebar-container">
            <MenuSidebar menuItems={SIDEBAR_MENU_ITEMS} />
          </Grid.Column>
          <Grid.Column className="book-list-container">
            {bookListMock.map(this.renderBookLists)}
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
