import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './cardListContainer.sass';
import { addProductToBasket } from '../../actions';
import * as types from '../../constants';
import { BasketState } from '../../redusers/basket';
import { Dispatch } from 'redux';

interface StateProps {
  basket: BasketState,
}

interface DispatchProps {
  addProductToBasket: (id: string) => void;
}

const mapStateToProps = (state: any): StateProps => {
  return {
    basket: state.basket,
  }
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    addProductToBasket: (id: string) => dispatch(addProductToBasket(id)),
  }
};

class CardsListContainer extends React.Component<StateProps & DispatchProps> {

  componentDidMount(){
    this.getDataList()
  }

  private getDataList(): void {
    const {addProductToBasket} = this.props;
    axios(types.CONTRACTS_BREACH_CODES_SERVICE_URL)
      .then(result => {
        console.log(result);
        addProductToBasket('1')
        }
      ).catch(error => {
      console.log(error)
      });
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