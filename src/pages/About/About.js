import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { setMessage } from './actions';

import Title from '../../components/Title';
import InputPreview from './components/InputPreview';

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
    const { message } = this.props.aboutReducer;

    return (
      <div className="about">
        <h1>About</h1>
        <Title />
        <InputPreview value={message} onChange={this.onChangeMessage} />
      </div>
    );
  }
}

About.displayName = 'About';
// About.propTypes = {};
