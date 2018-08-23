import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Segment } from 'semantic-ui-react';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Segment className="app">
          <div className="app-content">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/record/:recid" component={BookDetails} />
            <Footer />
          </div>
        </Segment>
      </Router>
    );
  }
}
