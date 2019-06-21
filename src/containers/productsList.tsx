import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addProductToCart, getProductsList } from '../actions';
import { CartState } from '../redusers/cart';
import { IStore } from '../redusers';
import '../styles/productsList.sass';

interface IPropsFromState {
  cart: CartState;
}

interface IPropsFromDispatch {
  addProductToBasket: (id: string) => void;
  getProductsList: () => void;
}

const mapStateToProps = (state: IStore): IPropsFromState => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch: any): IPropsFromDispatch => {
  return {
    addProductToBasket: (id: string) => dispatch(addProductToCart(id)),
    getProductsList: () => dispatch(getProductsList()),
  };
};

class ProductsList extends React.Component<IPropsFromState & IPropsFromDispatch> {

  componentDidMount() {
    this.getDataList();
  }

  private getDataList(): void {
    const { getProductsList } = this.props;
    getProductsList();
  }

  render() {
    return (
      <div className="page-container">
        <div>CardsListContainer</div>
        <Link className="nav-link" to="/">Go to Main</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
