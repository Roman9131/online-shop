import axios from 'axios';
import { ProductCard } from '../model/productCard';

const API_DATA_URL = 'http://localhost:3100/data';

export const axiosGetProductsList = () => {
  return axios.get<ProductCard[]>(API_DATA_URL);
};
