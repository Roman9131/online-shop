import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../styles/cart.sass';
import { IStore } from '../redusers';
import { CartState, ISelectedProductList } from '../redusers/cart';
import { ThunkDispatch } from 'redux-thunk';
import {
  deleteProductFromCart, IDeleteProductFromCart,
  incrementProductQuantity, IProductQuantityIncrement,
  decrementProductQuantity, IDecrementProductQuantity,
} from '../actions';
import CartSelectedItem from '../components/CartSelectedItem';

interface IMappedProps {
  cart: CartState;
}

interface IDispatchedProps {
  deleteProductFromCart: IDeleteProductFromCart;
  incrementProductQuantity: IProductQuantityIncrement;
  decrementProductQuantity: IDecrementProductQuantity;
}

const mapStateToProps = (state: IStore): IMappedProps => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, void, any>): IDispatchedProps => {
  return {
    deleteProductFromCart: (id: string) => dispatch(deleteProductFromCart(id)),
    incrementProductQuantity: (id: string) => dispatch(incrementProductQuantity(id)),
    decrementProductQuantity: (id: string) => dispatch(decrementProductQuantity(id)),
  };
};

class Cart extends React.Component<IMappedProps & IDispatchedProps> {

  private deleteProductFromCart = (id: string) => () => {
    const { deleteProductFromCart } = this.props;
    deleteProductFromCart(id);
  };

  private incrementProductQuantity = (id: string) => () => {
    const { incrementProductQuantity } = this.props;
    incrementProductQuantity(id);
  };

  private decrementProductQuantity = (id: string) => () => {
    const { decrementProductQuantity } = this.props;
    decrementProductQuantity(id);
  };

  render() {
    const {
      props: {
        cart: { selectedProductsList: selectedItems },
      },
    } = this;

    return (
      <div>
        <div>Корзина</div>
        <Link to="/">Вернуться к списку товаров</Link>
        <div className="card-list">
          {selectedItems.length !== 0 && selectedItems.map((item: ISelectedProductList) => {
            return (
              <CartSelectedItem
                productItem={item}
                key={item.product.id}
                onDeleteFromCartClick={this.deleteProductFromCart(item.product.id)}
                onIncrementProductClick={this.incrementProductQuantity(item.product.id)}
                onDecrementProductClick={this.decrementProductQuantity(item.product.id)}
              />);
          })}
        </div>
        {selectedItems.length !== 0 && <div className="total-price">
					Общая стоимость товаров составляет &nbsp;
          {selectedItems.reduce((previousValue, currentItem) => {
            return previousValue + currentItem.quantityOfProduct * currentItem.product.price;
          }, 0)
          } RUB
				</div>
        }
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
