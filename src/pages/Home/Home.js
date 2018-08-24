import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import BookResults from './components/BookResults';
import MenuSidebar from './components/MenuSidebar';
import Statistics from './components/Statistics';

import bookListMock from './BookList.mock';
import { SIDEBAR_MENU_ITEMS } from '../../constants';

import './Home.css';
import { subscribe } from '../../context';
import AppStore from '../../store';

class Home extends Component {
  render() {
    console.log('Home rendered');
    console.log(this.props.home);
    return (
      <div className="home-container">
        {/* <div className="home-banner">
          <div className="home-title">CERN Library</div>
          <div className="home-description">
            Find books, e-books, articles, proceedings to loan at CERN.
          </div>
        </div> */}
        <Grid columns="equal">
          <Grid.Column width={2} className="sidebar-container">
            <MenuSidebar menuItems={SIDEBAR_MENU_ITEMS} />
          </Grid.Column>
          <Grid.Column className="book-list-container">
            <div className="home-banner">
              <div className="home-title">CERN Library</div>
              <div className="home-description">
                Find books, e-books, articles, proceedings to loan at CERN.
              </div>
            </div>
            <BookResults data={bookListMock} />
          </Grid.Column>
        </Grid>
        <Statistics />
      </div>
    );
  }
}

const mapStateToProps = data => ({
  home: data.home,
});
export default subscribe(AppStore, mapStateToProps)(Home);
