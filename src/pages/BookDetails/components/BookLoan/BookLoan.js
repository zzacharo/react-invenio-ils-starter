import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import './BookLoan.css';

class BookLoan extends Component {
  render() {
    return (
      <div>
        <h3>This book is available</h3>
        <Button primary>LOAN BOOK</Button>
      </div>
    );
  }
}

export default BookLoan;
