import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookItem from './components/BookItem';

import './BookList.css';

export default class BookList extends Component {
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
        <h1 className="book-list-header">{title}</h1>

        <div className="book-list-content">{items.map(this.renderBook)}</div>
      </div>
    );
  }
}

BookList.propTypes = {
  title: PropTypes.string,
  bookList: PropTypes.object,
};
