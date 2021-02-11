import {
    showMostRecentProducts,
    showLowestPriceProducts,
    showHighesttPriceProducts,
    redeemByProduct,
    showSpinner,
    hideSpinner
} from '../actions/ContentAction';
import { getProducts, redeemProducts } from '../../services/apiServices';
import { showModal } from '../actions/HistoryAction';

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
export const redeemProductsThunk = (productId) => async (dispatch) => {
  dispatch(showSpinner());
  const response = await redeemProducts(productId);
  dispatch(redeemByProduct(response));
  dispatch(hideSpinner());
  dispatch(showModal('confirmation'));
}