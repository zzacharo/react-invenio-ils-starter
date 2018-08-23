import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import BookList from '../../../../components/BookList';

export default class BookResults extends Component {
  renderBookList(listItem, index) {
    return <BookList data={listItem} key={index} />;
  }

  render() {
    let { data } = this.props;
    return (
      <List className="book-results">{data.map(this.renderBookList)}</List>
    );
  }
}

BookResults.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    })
  ),
  divided: PropTypes.bool,
};
