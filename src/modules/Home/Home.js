import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from './components/Title';
import InputPreview from './components/InputPreview';

import { setMessage } from './actions';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props)

    this.onChangeMessage = this.onChangeMessage.bind(this);
  }

  onChangeMessage = (value) => {
    this.props.dispatch(setMessage(value))
  }

  render() {
    const { message } = this.props.homeReducer;

    return (
      <div className="home">
        Home

        <Title />
        <InputPreview
          value={message}
          onChange={this.onChangeMessage}
        />
      </div>
    );
  }
}

export default connect(state => state)(Home);
