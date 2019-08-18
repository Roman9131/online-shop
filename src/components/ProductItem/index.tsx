import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import './styles.sass';
import { Button } from '../Button';
import { IProductCard } from '../../@types/productCard';

interface IProductsItemProps {
  isSelected: boolean;
  productsItem: IProductCard;
  onAddToCartClick: (event: MouseEvent<HTMLButtonElement>) => void;
  setToDetailsClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const ProductItem = ({ isSelected, productsItem, onAddToCartClick, setToDetailsClick }: IProductsItemProps) => {
  const { name, price, currency, imageUrlSmallSize } = productsItem;
  return (
    <div className="product">
      <Link className="nav-link" to="/productDetails">
      <div className="image-wrapper" onClick={setToDetailsClick}>
        <img className="image" alt={name} src={imageUrlSmallSize}/>
      </div>
        <h3 className="product-title" onClick={setToDetailsClick}>{name}</h3>
      </Link>
        <div className="product-cost">{price} {currency}</div>
      { isSelected ?
        <Link className="nav-link" to="/cart"><Button className="button-link">Go to cart</Button></Link>
        :<Button className="button-add" onClick={onAddToCartClick}>Add to cart</Button>
      }
    </div>
  );
};

export default ProductItem;
