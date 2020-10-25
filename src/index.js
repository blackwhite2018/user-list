import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { App } from './app/App';
import { history } from './app/history';
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import './scss/assets.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
