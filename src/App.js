import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Header />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

App.displayName = 'App';
// App.propTypes = {};
