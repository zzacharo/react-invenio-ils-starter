import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './InputPreview.css';

export default class InputPreview extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="input-preview">
        <input
          type="text"
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
        />
      </div>
    );
  }
}

InputPreview.displayName = 'InputPreview';
// InputPreview.propTypes = {};