import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class Searchbar extends Component {
  render() {
    let { placeholder } = this.props;
    placeholder = placeholder || 'input search text';

    return (
      <Input icon="search" placeholder={placeholder} iconPosition="left" />
    );
  }
}

export default Searchbar;
