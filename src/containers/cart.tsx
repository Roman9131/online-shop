import * as React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cart.sass';

export default class Cart extends React.Component<any, any> {

  render() {
    return (
      <div className="page-container">
        <div>Корзина</div>
        <Link to="/">Вернуться к списку товаров</Link>
        <div className="filter-list">
        </div>
      </div>
    );
  }
}
