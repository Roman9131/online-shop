import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './cardListContainer.sass';
import {addProductToBasket, getProductCardsList } from '../../actions/index';
import {BasketState} from '../../redusers/basket';
import {Dispatch} from 'redux';

interface StateProps {
  basket: BasketState,
}

interface DispatchProps {
  addProductToBasket: (id: string) => void;
  getProductCardsList: () => void;
}

const mapStateToProps = (state: any): StateProps => {
  return {
    basket: state.basket,
  }
};

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    addProductToBasket: (id: string) => dispatch(addProductToBasket(id)),
    getProductCardsList: () => dispatch(getProductCardsList()),
  }
};

class CardsListContainer extends React.Component<StateProps & DispatchProps> {

  componentDidMount() {
    this.getDataList()
  }

  private getDataList(): void {
    const {getProductCardsList} = this.props;
    getProductCardsList();
  }

  render() {
    return (
      <div className="page-container">
        <div>CardsListContainer</div>
        <Link className="nav-link" to='/'>Go to Main</Link>
      </div>
    );
  }
}

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(CardsListContainer);