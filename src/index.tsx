import * as React from 'react';
import reactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import redusers from './redusers';

const store = createStore(
  redusers,
  applyMiddleware(reduxThunk),
);

reactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
