import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ProductDetails from '../components/ProductDetails';
import { IStore } from '../redusers';
import { CartState } from '../redusers/cart';
import { IProductCard } from '../@types/productCard';
import { IProductDetailsState } from '../redusers/productDetails';
import { addProductToCart, IAddProductToCart } from '../actions';

interface IMappedProps {
  productDetails: IProductDetailsState;
  cart: CartState;
}

interface IDispatchedProps {
  addProductToCart: IAddProductToCart;
}

const mapStateToProps = (state: IStore): IMappedProps => ({
  productDetails: state.productDetails,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchedProps => ({
  addProductToCart: (product: IProductCard) => dispatch(addProductToCart(product)),
});

export interface IProductDetailsContainerProps extends IMappedProps, IDispatchedProps {
}

const ProductDetailsContainer = (props: IProductDetailsContainerProps) => <ProductDetails {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);
