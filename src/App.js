import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />

          <Footer />
        </div>
      </Router>
    );
  }
}
