import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import '../styles/productsList.sass';
import Button from '../components/Button';
import ProductItem from '../components/ProductItem';
import loader from '../images/loader.gif';
import { IStore } from '../redusers';
import { CartState } from '../redusers/cart';
import { IProductCard } from '../@types/productCard';
import { IProductListState } from '../redusers/productsList';
import { addProductToCart, getProductsList, IAddProductToCart, IGetProductsList } from '../actions';

interface IPropsFromState {
  cart: CartState;
  productsList: IProductListState;
}

interface IPropsFromDispatch {
  addProductToCart: IAddProductToCart;
  getProductsList: IGetProductsList;
}

interface State {
  searchTerm: string;
}

const mapStateToProps = (state: IStore): IPropsFromState => {
  return {
    cart: state.cart,
    productsList: state.productsList,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, void, any>): IPropsFromDispatch => {
  return {
    addProductToCart: (product: IProductCard) => dispatch(addProductToCart(product)),
    getProductsList: () => dispatch(getProductsList()),
  };
};

class ProductsList extends React.PureComponent<IPropsFromState & IPropsFromDispatch> {
  state: State = {
    searchTerm: '',
  };

  private onSearchChange = (e: any) => {
    this.setState({ searchTerm: e.target.value });
  };

  private onSearchSubmit = (e: any) => {
    const { searchTerm } = this.state;
    console.log(searchTerm);
    const { getProductsList } = this.props;
    getProductsList();
    e.preventDefault();
  };

  private addToCart = (item: IProductCard) => () => {
    const { addProductToCart } = this.props;
    addProductToCart(item);
  };

  render() {
    const {
      state: { searchTerm },
      props: {
        productsList: { list, error, isLoading },
        cart: { selectedProductsList: selectedItems },
      },
    } = this;

    return (
      <div className="page-wrapper">
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
                  productItem={item}
                  isSelected={isSelected}
                  key={item.id}
                  onAddToCartClick={this.addToCart(item)}/>);
            })}
            {isLoading && <div><img alt="loader" src={loader}/></div>}
            {error && <div><span className="error-text">Error of download products</span></div>}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
