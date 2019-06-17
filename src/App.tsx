import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import CardsListContainer from './containers/cardListContainer/cardsListContainer';
import Main from './containers/main/main'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div>
          <Route path="/" exact component={Main}/>
          <Route path="/results" component={CardsListContainer}/>
        </div>
      </Router>
    </div>
  );
};

export default App;
