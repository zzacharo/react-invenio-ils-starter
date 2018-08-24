import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import BookList from '../../components/BookList';
import BookCover from '../../components/BookCover';
import BookInfo from './components/BookInfo';

import bookDetailsMock from './BookDetails.mock';
import database from '../../databse';

import './BookDetails.css';

class BookDetails extends Component {
  constructor(props) {
    super(props);

    this.cover = {
      width: 300,
      height: 420,
    };

    this.state = {
      bookInfo: {},
      coverUrl: '',
    };
  }

  static getDerivedStateFromProps(props) {
    const { recid } = props.match.params;
    const { title, author, abstract } = database[recid];

    return {
      bookInfo: {
        title: title,
        author: author,
        abstract: abstract,
      },
      coverUrl: `https://picsum.photos/300/420?image=10${recid}`,
    };
  }

  render() {
    return (
      <div className="book-details-container">
        <div className="book-details">
          <BookCover {...this.cover} coverUrl={this.state.coverUrl} />
          <BookInfo {...this.state.bookInfo} />
        </div>

        <BookList data={bookDetailsMock} />
      </div>
    );
  }
}

export default withRouter(BookDetails);
