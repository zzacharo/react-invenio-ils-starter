import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

import './BookItem.css';

class BookItem extends Component {
  constructor(props) {
    super(props);

    this.goToDetails = this.goToDetails.bind(this);
  }

  goToDetails() {
    this.props.history.push({
      pathname: `/record/${this.props.id}`,
      state: {
        recid: this.props.id,
        title: this.props.title,
        description: this.props.description,
      },
    });
  }

  render() {
    const { title } = this.props;

    return (
      <div className="book-item">
        <div
          className="book-cover"
          style={{
            backgroundImage: `url(https://picsum.photos/200/280?image=10${
              this.props.id
            })`,
          }}
        />
        <div className="book-overlay">
          <Icon name="bookmark" size="large" />
          <Button circular icon="eye" size="big" onClick={this.goToDetails} />
          <Icon name="plus circle" size="large" />
        </div>
        <div className="book-meta">
          <h4>{title}</h4>
          <p>Dummy Author</p>
        </div>
      </div>
    );
  }
}

export default withRouter(BookItem);
