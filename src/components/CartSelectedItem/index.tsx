import React, { MouseEvent } from 'react';

import './styles.sass';
import { ISelectedProductList } from '../../redusers/cart';
import QuantityProductSetter from '../QuantityProductSetter';
import cartIcon from '../../images/cart-icon.svg';
import { Link } from 'react-router-dom';

interface ICartSelectedItemProps {
  productItem: ISelectedProductList;
  onDeleteFromCartClick: (event: MouseEvent<HTMLDivElement>) => void;
  onIncrementProductClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onDecrementProductClick: (event: MouseEvent<HTMLButtonElement>) => void;
  setToDetailsClick: (event: MouseEvent<HTMLDivElement>) => void;

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
        setToDetailsClick,
      },
    } = this;

    const totalCosts: number = quantityOfProduct * price;

    return (
      <div className="product-row">
        <Link className="nav-link" to="/productDetails">
        <div className="cart-image-wrapper" onClick={setToDetailsClick}>
          <img className="cart-image" alt={name} src={imageUrlSmallSize}/>
        </div>
        </Link>
        <div className="product-title-wrapper">
          <Link className="nav-link" to="/productDetails">
          <h3 className="product-title" onClick={setToDetailsClick}>{name}</h3>
          </Link>
        </div>

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

