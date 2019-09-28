import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import CartContainer from './containers/CartContainer';
import ProductsListContainer from './containers/ProductsListContainer';
import ProductDetailsContainer from './containers/ProductDetailsContainer';

const App: React.FC = () => {
  return (
      <Router>
          <Route path="/" exact component={ProductsListContainer}/>
          <Route path="/cart" component={CartContainer}/>
          <Route path="/productDetails" component={ProductDetailsContainer}/>
      </Router>
  );
};

export default App;
