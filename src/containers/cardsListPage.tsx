import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const BACKEND_REST_URL: string = 'http://localhost:3100';
export const CONTRACTS_BREACH_CODES_SERVICE_URL: string = BACKEND_REST_URL + '/data';

export default class CardsListPage extends React.Component<any, any> {

  componentDidMount(){
    this.getDataList()
  }

  private getDataList(): any {
    axios(CONTRACTS_BREACH_CODES_SERVICE_URL)
      .then(result => {
        console.log(result)
        }
      ).catch(error => {
      console.log(error)
      });
  }

  render() {
    return (
      <div>
        <div>CardsListPage</div>
        <Link to='/'>Goto Home</Link>
      </div>
    );
  }
}