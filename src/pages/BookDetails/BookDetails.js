import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import BookList from '../../components/BookList';
import BookCover from '../../components/BookCover';
import BookInfo from './components/BookInfo';

import bookDetailsMock from './BookDetails.mock';
import database from '../../databse';

import './BookDetails.css';
import { subscribe } from '../../context';
import { BookStore } from '../../store';

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

  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.props.fetchBook(location.state.recid);
    });
    // on load page get the recid from path
    this.props.fetchBook(this.props.match.params.recid);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  // static getDerivedStateFromProps(props) {
  //   const { recid } = props.match.params;
  //   const { title, author, abstract } = database[recid];

  //   return {
  //     bookInfo: {
  //       title: title,
  //       author: author,
  //       abstract: abstract,
  //     },
  //     coverUrl: `https://picsum.photos/300/420?image=10${recid}`,
  //   };
  // }

  render() {
    let { currentBook } = this.props;
    return (
      <div className="book-details-container">
        <div className="book-details">
          <BookCover
            {...this.cover}
            coverUrl={`https://picsum.photos/300/420?image=10${
              currentBook.recid
            }`}
          />
          <BookInfo {...this.props.currentBook} />
        </div>

        <BookList data={bookDetailsMock} />
      </div>
    );
  }
}

export default withRouter(subscribe(BookStore)(BookDetails));
