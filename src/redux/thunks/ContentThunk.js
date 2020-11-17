import { showListProducts } from "../actions/ContentAction";
import { getListProducts } from '../../services/apiServices';

export const ContentThunk = () => async (dispatch) => {
  const response = await getListProducts();
  dispatch(showListProducts(response));
};