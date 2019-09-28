import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Cart from '../components/Cart';
import { IStore } from '../redusers';
import { IProductCard } from '../@types/productCard';
import { CartState } from '../redusers/cart';
import {
  deleteProductFromCart, IDeleteProductFromCart,
  incrementProductQuantity, IProductQuantityIncrement,
  decrementProductQuantity, IDecrementProductQuantity,
  setProductToDetails, ISetProductToDetails,
} from '../actions';

interface IMappedProps {
  cart: CartState;
}

interface IDispatchedProps {
  deleteProductFromCart: IDeleteProductFromCart;
  incrementProductQuantity: IProductQuantityIncrement;
  decrementProductQuantity: IDecrementProductQuantity;
  setProductToDetails: ISetProductToDetails;
}

const mapStateToProps = (state: IStore): IMappedProps => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchedProps => ({
  deleteProductFromCart: (id: string) => dispatch(deleteProductFromCart(id)),
  incrementProductQuantity: (id: string) => dispatch(incrementProductQuantity(id)),
  decrementProductQuantity: (id: string) => dispatch(decrementProductQuantity(id)),
  setProductToDetails: (product: IProductCard) => dispatch(setProductToDetails(product)),
});

export interface ICartContainerProps extends IMappedProps, IDispatchedProps {
}

const CartContainer = (props: ICartContainerProps) => <Cart {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
