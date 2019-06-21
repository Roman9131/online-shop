import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ProductsList from './containers/productsList';
import Main from './containers/main';

const App: React.FC = () => {
  return (
      <Router>
          <Route path="/" exact component={Main}/>
          <Route path="/results" component={ProductsList}/>
      </Router>
  );
};

export default App;
