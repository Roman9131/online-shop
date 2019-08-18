import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Cart from './containers/cart';
import ProductsList from './containers/productsList';
import ProductsDetails from './containers/productDetails';

const App: React.FC = () => {
  return (
      <Router>
          <Route path="/" exact component={ProductsList}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/productDetails" component={ProductsDetails}/>
      </Router>
  );
};

export default App;
