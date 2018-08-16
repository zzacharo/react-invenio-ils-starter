import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Book from './components/Book';

import './BookList.css';

export default class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>BookList</h1>
        <Book />
      </div>
    );
  }
}

BookList.displayName = 'BookList';
// BookList.propTypes = {};
