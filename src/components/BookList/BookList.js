import React, { Component } from 'react';

import BookItem from './components/BookItem';

import './BookList.css';
import BookListMock from './BookList.mock';

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
    return (
      <div className="book-list">
        <h1 className="book-list-header">{this.props.title}</h1>

        <div className="book-list-content">
          {BookListMock.map(this.renderBook)}
        </div>
      </div>
    );
  }
}

BookList.displayName = 'BookList';
