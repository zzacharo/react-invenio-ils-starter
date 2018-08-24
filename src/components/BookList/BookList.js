import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookItem from './components/BookItem';

import './BookList.css';

class BookList extends Component {
  renderBook(book) {
    return (
      <BookItem
        key={book.id}
        id={book.id}
        title={book.title}
        description={book.description}
      />
    );
  }

  render() {
    const { items, title } = this.props.data;
    return (
      <div className="book-list">
        <div className="book-list-header">{title}</div>

        <div className="book-list-content">{items.map(this.renderBook)}</div>
      </div>
    );
  }
}

BookList.propTypes = {
  title: PropTypes.string,
  bookList: PropTypes.object,
};

export default BookList;
