import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ProductsList from './containers/productsList';
import Cart from './containers/cart';

const App: React.FC = () => {
  return (
      <Router>
          <Route path="/" exact component={ProductsList}/>
          <Route path="/cart" component={Cart}/>
      </Router>
  );
};

export default App;
