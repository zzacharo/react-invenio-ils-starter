import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

import './BookItem.css';

export default class BookItem extends Component {
  render() {
    return (
      <div className="book-item">
        <div
          className="book-cover"
          style={{
            backgroundImage: `url(https://picsum.photos/200/280?image=106${
              this.props.id
            })`,
          }}
        />
        <div className="book-overlay">
          <Icon name="bookmark" size="large" />
          <Button circular icon="eye" size="big" />
          <Icon name="plus circle" size="large" />
        </div>
        <div className="book-meta">
          <h4>{this.props.title}</h4>
          <p>Dummy Author</p>
        </div>
      </div>
    );
  }
}
