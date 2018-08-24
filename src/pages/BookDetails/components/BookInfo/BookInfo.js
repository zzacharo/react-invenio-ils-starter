import React, { Component } from 'react';

import './BookInfo.css';

class BookInfo extends Component {
  render() {
    const { title, author, abstract } = this.props;

    return (
      <div className="book-details-info">
        <div className="book-details-title">
          <h1>{title}</h1>
        </div>
        <div className="book-details-author">by {author}</div>
        <div className="book-details-abstract">{abstract}</div>
        <div className="book-details-other">Aditional Information</div>
      </div>
    );
  }
}

export default BookInfo;
