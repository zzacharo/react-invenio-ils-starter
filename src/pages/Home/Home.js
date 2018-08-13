import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from '../../components/Title';
import InputPreview from './components/InputPreview';

import { setMessage } from './actions';

import './Home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.onChangeMessage = this.onChangeMessage.bind(this);
  }

  onChangeMessage(value) {
    this.props.dispatch(setMessage(value));
  }

  render() {
    const { message } = this.props.homeReducer;

    return (
      <div className="home">
        Home
        <Title />
        <InputPreview value={message} onChange={this.onChangeMessage} />
      </div>
    );
  }
}

Home.displayName = 'Home';
Home.propTypes = {
  homeReducer: PropTypes.object,
};
