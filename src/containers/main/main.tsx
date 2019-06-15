import * as React from 'react';
import { Link } from 'react-router-dom';
import './main.sass';

export default class Main extends React.Component<any, any> {

  render() {
    return (
      <div className="page-container">
        <div>MainPage</div>
        <Link to='/card-list'>Go to CardListContainer</Link>
      </div>
    );
  }
}