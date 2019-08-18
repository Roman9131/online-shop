import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import '../styles/productDetails.sass';
import { IProductDetailsState } from '../redusers/productDetails';
import {
  addProductToCart,
  IAddProductToCart
} from '../actions';
import { IStore } from '../redusers';
import { IProductCard } from '../@types/productCard';
import ProductDetailsItem from '../components/ProductDetailsItem';
import { CartState } from '../redusers/cart';
import { Link } from 'react-router-dom';

interface IMappedProps {
  productDetails: IProductDetailsState;
  cart: CartState;
}

interface IDispatchedProps {
  addProductToCart: IAddProductToCart;
}

const mapStateToProps = (state: IStore): IMappedProps => {
  return {
    productDetails: state.productDetails,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, void, any>): IDispatchedProps => {
  return {
    addProductToCart: (product: IProductCard) => dispatch(addProductToCart(product)),
  };
};

class ProductsDetails extends React.PureComponent<IMappedProps & IDispatchedProps> {

  private addToCart = (item: IProductCard) => () => {
    const { addProductToCart } = this.props;
    addProductToCart(item);
  };

  render() {
    const {
      props: {
        productDetails: { productDetailsItem },
        cart: { selectedProductsList: selectedItems },
      },
    } = this;

    const isSelected: boolean = productDetailsItem && selectedItems ?
      selectedItems.findIndex(el => el.product.id === productDetailsItem.id) !== -1 : false;

    return (
      <div className="product-details">
        <div className="products-section">
          <Link to="/">Вернуться к списку товаров</Link>
          <div className="product-details-title">
            Детальная информация товара
          </div>
          <div className="product-details-wrapper">
            {productDetailsItem &&
						<ProductDetailsItem
							products={productDetailsItem}
							isSelected={isSelected}
							onAddToCartClick={this.addToCart(productDetailsItem)}
						/>
            }
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetails);
