import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Book from './components/Book';

import './BookList.css';
import BookListMock from './BookList.mock';

export default class BookList extends Component {
  renderBook(book) {
    return (
      <Book key={book.id} title={book.title} description={book.description} />
    );
  }

  render() {
    return (
      <div className="book-list">
        <h1 className="book-list-header">BookList</h1>

        <div className="book-list-content">
          {BookListMock.map(this.renderBook)}
        </div>
      </div>
    );
  }
}

BookList.displayName = 'BookList';
// BookList.propTypes = {};
