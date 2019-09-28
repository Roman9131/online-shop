import * as React from 'react';

import './styles.sass';
import Button from '../../components/Button';
import ProductItem from '../../components/ProductItem';
import loaderGif from '../../images/loader.gif';
import { IProductCard } from '../../@types/productCard';
import { IProductsListContainerProps } from '../../containers/ProductsListContainer';

interface State {
  searchTerm: string;
}

export interface IProductsListProps extends IProductsListContainerProps {
}

export default class ProductsList extends React.PureComponent<IProductsListProps> {
  state: State = {
    searchTerm: '',
  };

  private onSearchChange = (e: any) => {
    this.setState({ searchTerm: e.target.value });
  }

  private onSearchSubmit = (e: any) => {
    const { asyncGetProductsList } = this.props;
    asyncGetProductsList();
    e.preventDefault();
  }

  private addToCart = (item: IProductCard) => () => {
    const { addProductToCart } = this.props;
    addProductToCart(item);
  }

  private setToDetails = (item: IProductCard) => () => {
    const { setProductToDetails } = this.props;
    setProductToDetails(item);
  }

  render() {
    const {
      state: { searchTerm },
      props: {
        productsList: { list, error, isLoading },
        cart: { selectedProductsList: selectedItems },
      },
    } = this;

    return (
      <div className="products-list">
        <div className="search-wrapper">
          <form onSubmit={this.onSearchSubmit}>
            <input type="text" value={searchTerm} onChange={this.onSearchChange}/>
            <Button type={'submit'} className={'button-search'}>Поиск</Button>
          </form>
        </div>
        <div className="products-section">
          <div className="products-wrapper">
            {list.length !== 0 && list.map((item: IProductCard) => {
              const isSelected: boolean = selectedItems &&
                selectedItems.findIndex(el => el.product.id === item.id) !== -1;
              return (
                <ProductItem
                  productsItem={item}
                  isSelected={isSelected}
                  key={item.id}
                  onAddToCartClick={this.addToCart(item)}
                  setToDetailsClick={this.setToDetails(item)}/>);
            })}
            {isLoading && <div><img alt="loader" src={loaderGif}/></div>}
            {error && <div><span className="error-text">Error of download products</span></div>}
          </div>
        </div>
      </div>
    );
  }
}
