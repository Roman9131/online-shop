import React from 'react';
import { Link } from 'react-router-dom';

import './styles.sass';
import { Button } from '../Button';
import { IProductCard } from '../../@types/productCard';

interface IProductItemProps {
  isSelected: boolean;
  productItem: IProductCard;
  onAddToCartClick: () => void;
}

const ProductItem = ({ isSelected, productItem, onAddToCartClick }: IProductItemProps) => {
  const { name, price, currency, imageUrlSmallSize } = productItem;
  return (
    <div className="product-wrapper">
      <div className="image-wrapper">
        <img className="image" alt={name} src={imageUrlSmallSize}/>
      </div>
        <h3 className="product-title">{name}</h3>
        <div className="product-cost">{price} {currency}</div>
      { isSelected ?
        <Link className="nav-link" to="/cart"><Button className="button-link">Go to cart</Button></Link>
        :<Button className="button-add" onClick={onAddToCartClick}>Add to cart</Button>
      }
    </div>
  );
};

export default ProductItem;