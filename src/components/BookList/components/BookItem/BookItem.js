import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import BookCover from '../../../BookCover';

import './BookItem.css';

class BookItem extends Component {
  constructor(props) {
    super(props);

    this.cover = {
      width: 180,
      height: 260,
    };

    this.goToDetails = this.goToDetails.bind(this);
  }

  goToDetails() {
    this.props.history.push({
      pathname: `/record/${this.props.recid}`,
      state: {
        recid: this.props.recid,
      },
    });
  }

  render() {
    const { title, coverUrl } = this.props;
    return (
      <div className="book-item">
        <BookCover {...this.cover} coverUrl={coverUrl} />
        <div
          className="book-overlay"
          style={{
            width: `${this.cover.width}px`,
            height: `${this.cover.height}px`,
          }}
        >
          <Icon name="bookmark" size="large" />
          <Button circular icon="eye" size="big" onClick={this.goToDetails} />
          <Icon name="plus circle" size="large" />
        </div>
        <div className="book-meta">
          <span className="book-title">{title}</span>
          <span className="book-author">Dummy Author</span>
        </div>
      </div>
    );
  }
}

export default withRouter(BookItem);
