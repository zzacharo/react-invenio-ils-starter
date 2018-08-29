import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import BookList from '../../components/BookList';
import BookCover from '../../components/BookCover';
import BookInfo from './components/BookInfo';
import BookLoan from './components/BookLoan';

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

    this.fetchBook = this.fetchBook.bind(this);
  }

  fetchBook(recid) {
    this.setState({
      bookInfo: database[recid],
      coverUrl: `https://picsum.photos/300/420?image=10${recid}`,
    });
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      if (location.state) {
        this.fetchBook(location.state.recid);
      }
    });

    this.fetchBook(this.props.match.params.recid);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <div className="book-details-container">
        <div className="book-details">
          <div className="book-meta">
            <BookCover {...this.cover} coverUrl={this.state.coverUrl} />
            <BookInfo {...this.state.bookInfo} />
          </div>
          <BookLoan />
        </div>

        <BookList data={bookDetailsMock} />
      </div>
    );
  }
}

export default withRouter(BookDetails);
