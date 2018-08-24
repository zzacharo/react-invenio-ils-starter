import React from 'react';
import ReactDOM from 'react-dom';
import AppStore, { BookStore } from './store';
import { UserStore } from './plugin';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <AppStore extraStores={[UserStore, BookStore]}>
    <App />
  </AppStore>,
  document.getElementById('root')
);

registerServiceWorker();
