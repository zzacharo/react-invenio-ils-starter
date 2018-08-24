import React, { Component, createContext } from 'react';

/**
 * External Module
 */
const UserContext = createContext({});

export class UserStore extends Component {
  static Provider = UserContext.Provider;
  static Consumer = UserContext.Consumer;

  state = {
    user: {
      name: 'A user',
    },
  };

  //   static subscribe = mapContextToProps => Child => props => (
  //     <UserStore.Consumer>
  //       {data => <Child {...mapContextToProps(data)} {...props} />}
  //     </UserStore.Consumer>
  //   );

  render() {
    console.log('Userstore renders');

    return (
      <UserStore.Provider value={this.state}>
        {this.props.children}
      </UserStore.Provider>
    );
  }
}
