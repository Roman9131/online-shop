import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.sass';
import { IProductCard } from '../../@types/productCard';
import { ICartContainerProps } from '../../containers/CartContainer';
import CartSelectedItem from '../CartSelectedItem';
import { ISelectedProductList } from '../../redusers/cart';

export interface ICartProps extends ICartContainerProps {
}

export default class Cart extends React.Component<ICartProps> {

  private deleteProductFromCart = (id: string) => () => {
    const { deleteProductFromCart } = this.props;
    deleteProductFromCart(id);
  }

  private incrementProductQuantity = (id: string) => () => {
    const { incrementProductQuantity } = this.props;
    incrementProductQuantity(id);
  }

  private decrementProductQuantity = (id: string) => () => {
    const { decrementProductQuantity } = this.props;
    decrementProductQuantity(id);
  }

  private setToDetails = (item: IProductCard) => () => {
    const { setProductToDetails } = this.props;
    setProductToDetails(item);
  }

  render() {
    const {
      props: {
        cart: { selectedProductsList: selectedItems },
      },
    } = this;

    return (
      <div className="card">
        <Link to="/">Вернуться к списку товаров</Link>
        <div className="card-title">
          Количество добавленных товаров в корзине:
          {selectedItems.length !== 0 ? selectedItems.length : '0'}
        </div>
        <div className="card-list">
          {selectedItems.length !== 0 && selectedItems.map((item: ISelectedProductList) => {
            return (
              <CartSelectedItem
                productItem={item}
                key={item.product.id}
                onDeleteFromCartClick={this.deleteProductFromCart(item.product.id)}
                onIncrementProductClick={this.incrementProductQuantity(item.product.id)}
                onDecrementProductClick={this.decrementProductQuantity(item.product.id)}
                setToDetailsClick={this.setToDetails(item.product)}
              />);
          })}
        </div>
        {selectedItems.length !== 0 && (
          <div className="total-price">
            Общая стоимость товаров составляет &nbsp;
            {selectedItems.reduce((previousValue, currentItem) => {
              return previousValue + currentItem.quantityOfProduct * currentItem.product.price;
            }, 0)
            } RUB
          </div>)
        }
      </div>
    );
  }
}
