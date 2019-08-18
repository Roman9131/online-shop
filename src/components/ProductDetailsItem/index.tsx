import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import './styles.sass';
import { Button } from '../Button';
import { IProductCard } from '../../@types/productCard';

interface IProductsItemProps {
  isSelected: boolean;
  products: IProductCard;
  onAddToCartClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ProductDetailsItem = ({ isSelected, products, onAddToCartClick }: IProductsItemProps) => {
  const { name, price, currency, imageUrlOrigin, color, rating, manufacturer } = products;
  return (
    <div className="product-details">
      <div className="product-left-side">
        <div className="image-large-wrapper">
          <img className="image-large" alt={name} src={imageUrlOrigin}/>
        </div>
      </div>
      <div className="product-right-side">
        <h3 className="product-details-title">{name}</h3>
        <div className="product-color">Цвет товара: <span> {color}</span></div>
        <div className="product-manufacturer">Производитель: <span>{manufacturer}</span> </div>
        <div className="product-rating">Рейтинг товара: <span>{rating} из 5</span> </div>
        <div className="product-details-cost">Стоимость товара: <span>{price} {currency}</span></div>
        {isSelected ?
          <Link className="nav-link" to="/cart"><Button className="button-link">Go to cart</Button></Link>
          : <Button className="button-add" onClick={onAddToCartClick}>Add to cart</Button>
        }
      </div>
    </div>
  );
};

export default ProductDetailsItem;
