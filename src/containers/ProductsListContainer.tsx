import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ProductsList from  '../components/ProductsList';
import { IStore } from '../redusers';
import { CartState } from '../redusers/cart';
import { IProductCard } from '../@types/productCard';
import { IProductListState } from '../redusers/productsList';
import {
  addProductToCart,
  asyncGetProductsList,
  setProductToDetails,
  IAddProductToCart,
  ISetProductToDetails,
  IAsyncGetProductsList,
} from '../actions';

interface IMappedProps {
  cart: CartState;
  productsList: IProductListState;
}

interface IDispatchedProps {
  addProductToCart: IAddProductToCart;
  setProductToDetails: ISetProductToDetails;
  asyncGetProductsList: IAsyncGetProductsList;
}

const mapStateToProps = (state: IStore): IMappedProps => ({
  cart: state.cart,
  productsList: state.productsList,
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchedProps => ({
  addProductToCart: (product: IProductCard) => dispatch(addProductToCart(product)),
  setProductToDetails: (product: IProductCard) => dispatch(setProductToDetails(product)),
  asyncGetProductsList: () => dispatch(asyncGetProductsList()),
});

export interface IProductsListContainerProps extends IMappedProps, IDispatchedProps {
}

const ProductsListContainer = (props: IProductsListContainerProps) => <ProductsList {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer);
