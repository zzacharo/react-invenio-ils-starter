import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import BookList from '../../components/BookList';

import bookDetailsMock from './BookDetails.mock';
import './BookDetails.css';

class BookDetails extends Component {
  state = {
    title: '',
    imageUrl: '',
    description: '',
  };

  static getDerivedStateFromProps(props, state) {
    const { recid } = props.match.params;

    return {
      title: 'Title',
      description: 'Description',
      imageUrl: `https://picsum.photos/300/420?image=10${recid}`,
    };
  }

  render() {
    return (
      <div className="book-details-container">
        <div className="book-details">
          <div
            className="book-details-cover"
            style={{
              backgroundImage: `url(${this.state.imageUrl})`,
            }}
          />
          <div className="book-details-info">
            <div className="book-details-title">
              <h1>{this.state.title}</h1>
            </div>
            <div className="book-details-description">
              {this.state.description}
            </div>
            <div className="book-details-other">Aditional Information</div>
          </div>
        </div>

        <div className="book-details-suggestions">
          <BookList data={bookDetailsMock} />;
        </div>
      </div>
    );
  }
}

export default withRouter(BookDetails);
