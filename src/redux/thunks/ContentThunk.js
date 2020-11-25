import { showMostRecentProducts, showLowestPriceProducts, showHighesttPriceProducts } from "../actions/ContentAction";
import { getProducts } from '../../services/apiServices';

export const mostRecentProductsThunk = () => async (dispatch) => {
  const response = await getProducts();
  dispatch(showMostRecentProducts(response));
};
export const lowestPriceProductsThunk = () => async (dispatch) => {
  const response = await getProducts();
  dispatch(showLowestPriceProducts(response));
};
export const highestPriceProductsThunk = () => async (dispatch) => {
  const response = await getProducts();
  dispatch(showHighesttPriceProducts(response));
};