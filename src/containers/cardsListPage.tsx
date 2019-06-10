import * as React from 'react';
import { Link } from 'react-router-dom';

export default class CardsListPage extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div>CardsListPage</div>
        <Link to='/'>Goto Home</Link>
      </div>
    );
  }
}