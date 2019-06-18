import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToBasket, getProductsList } from '../../actions';
import { CartState } from '../../redusers/cart';
import './cardListContainer.sass';

interface StateProps {
  cart: CartState;
}

interface DispatchProps {
  addProductToBasket: (id: string) => void;
  getProductsList: () => void;
}

const mapStateToProps = (state: any): StateProps => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    addProductToBasket: (id: string) => dispatch(addProductToBasket(id)),
    getProductsList: () => dispatch(getProductsList()),
  };
};

class CardsListContainer extends React.Component<StateProps & DispatchProps> {

  componentDidMount() {
    this.getDataList();
  }

  private getDataList(): void {
    const { getProductsList } = this.props;
    getProductsList();
  }

  render() {
    return (
      <div className="page-container">
        <div>CardsListContainer</div>
        <Link className="nav-link" to="/">Go to Main</Link>
      </div>
    );
  }
}

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(CardsListContainer);
