import * as React from 'react';

import './styles.sass';
import { ISelectedProductList } from '../../redusers/cart';
import QuantityProductSetter from '../QuantityProductSetter';
import cartIcon from '../../images/cart-icon.svg';

interface ICartSelectedItemProps {
  productItem: ISelectedProductList;
  onDeleteFromCartClick: () => void;
  onIncrementProductClick: () => void;
  onDecrementProductClick: () => void;
}

export default class CartSelectedItem extends React.PureComponent<ICartSelectedItemProps> {
  render() {
    const {
      props: {
        productItem: {
          product: { imageUrlSmallSize, price, currency, name },
          quantityOfProduct,
        },
        onDeleteFromCartClick,
        onIncrementProductClick,
        onDecrementProductClick,
      },
    } = this;

    const totalCosts: number = quantityOfProduct * price;

    return (
      <div className="product-row">
        <div className="cart-image-wrapper">
          <img className="cart-image" alt={name} src={imageUrlSmallSize}/>
        </div>
        <h3 className="product-title">{name}</h3>
        <div>
        <QuantityProductSetter quantityOfProduct={quantityOfProduct}
                               onIncrementProductClick={onIncrementProductClick}
                               onDecrementProductClick={onDecrementProductClick}
        />
        <span className="product-cost product-cost__text_sm">{price} {currency}/ШТ</span>
        </div>
        <span className="product-cost">{totalCosts} {currency}</span>
        <div className="cart-image-icon" onClick={onDeleteFromCartClick}>
          <img className="image-icon" alt="cart-icon" src={cartIcon}/>
        </div>
      </div>
    );
  }
}

