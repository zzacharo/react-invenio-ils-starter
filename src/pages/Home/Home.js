import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

import BookList from '../../components/BookList';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Grid columns="equal">
          <Grid.Column>1</Grid.Column>
          <Grid.Column width={12}>
            <BookList />
          </Grid.Column>
          <Grid.Column>3 </Grid.Column>
        </Grid>
      </div>
    );
  }
}

Home.displayName = 'Home';
Home.propTypes = {
  aboutReducer: PropTypes.object,
};
