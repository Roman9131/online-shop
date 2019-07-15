import React from 'react';

import './styles.sass';
import { Button } from '../Button';

interface IProductItemProps {
  quantityOfProduct: number;
  onIncrementProductClick: () => void;
  onDecrementProductClick: () => void;
}

const QuantityProductSetter = (
  { onDecrementProductClick, onIncrementProductClick, quantityOfProduct }: IProductItemProps) => {
  const decrementButtonDiabled: boolean = quantityOfProduct === 1;
  const incrementButtonDiabled: boolean = quantityOfProduct > 98;
  return (
    <div className="quantity-product">
      <Button disabled={decrementButtonDiabled}
              className="button-decrement"
              onClick={onDecrementProductClick}/>
      <div className="product-counter">{quantityOfProduct}</div>
      <Button disabled={incrementButtonDiabled}
              className="button-increment"
              onClick={onIncrementProductClick}/>
    </div>
);
};

export default QuantityProductSetter;
