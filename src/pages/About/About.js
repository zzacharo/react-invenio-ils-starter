import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { setMessage } from './actions';

import Title from '../../components/Title';

import './About.css';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.onChangeMessage = this.onChangeMessage.bind(this);
  }

  onChangeMessage(value) {
    this.props.dispatch(setMessage(value));
  }

  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <Title />
      </div>
    );
  }
}

About.displayName = 'About';
// About.propTypes = {};
