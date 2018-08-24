import React, { createContext, Component } from 'react';
import database from './databse';
const AppContext = createContext({});

export default class AppStore extends Component {
  static Provider = AppContext.Provider;
  static Consumer = AppContext.Consumer;

  state = {
    home: {
      title: 'Home',
    },
  };

  renderExtraStores(stores) {
    if (stores.length) {
      let Store = stores.shift();
      return <Store>{this.renderExtraStores(stores)}</Store>;
    } else {
      return { ...this.props.children };
    }
  }

  render() {
    let { extraStores } = this.props;
    return (
      <AppStore.Provider value={this.state}>
        {this.renderExtraStores(extraStores)}
      </AppStore.Provider>
    );
  }
}

const BookContext = createContext({});
export class BookStore extends Component {
  static Provider = BookContext.Provider;
  static Consumer = BookContext.Consumer;

  initialState = {
    currentBook: {},
  };

  constructor() {
    super();

    this.actions = {
      fetchBook: this.fetchBook.bind(this),
    };

    this.state = {
      ...this.initialState,
      ...this.actions,
    };
  }

  fetchBook(recid) {
    this.setState({ currentBook: { ...database[recid], recid: recid } });
  }

  render() {
    return (
      <BookStore.Provider value={this.state}>
        {this.props.children}
      </BookStore.Provider>
    );
  }
}
