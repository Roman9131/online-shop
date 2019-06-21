import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import redusers from './redusers';

const store = createStore(
  redusers,
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
