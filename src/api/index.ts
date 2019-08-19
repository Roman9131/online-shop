import axios from 'axios';
import { IProductCard } from '../@types/productCard';

const API_DATA_URL: string = 'http://localhost:3100/data';

export const axiosGetProductsList = () => {
  return axios.get<IProductCard[]>(API_DATA_URL)
};
