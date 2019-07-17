import React, { MouseEvent } from 'react';

import './styles.sass';
import { Button } from '../Button';

interface IProductItemProps {
  quantityOfProduct: number;
  onIncrementProductClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onDecrementProductClick: (event: MouseEvent<HTMLButtonElement>) => void;
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
