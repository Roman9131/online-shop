import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.sass';
import { IProductCard } from '../../@types/productCard';
import ProductDetailsItem from '../../components/ProductDetailsItem';
import { IProductDetailsContainerProps } from '../../containers/ProductDetailsContainer';

export interface IProductsDetailsProps extends IProductDetailsContainerProps {
}

export default class ProductsDetails extends React.PureComponent<IProductsDetailsProps> {

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
						<ProductDetailsItem products={productDetailsItem}
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
