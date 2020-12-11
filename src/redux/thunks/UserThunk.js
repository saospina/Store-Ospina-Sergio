import { showUser, addPoints } from "../actions/UserAction";
import { getUser, getPoints } from '../../services/apiServices';

export const userThunk = () => async (dispatch) => {
  const response = await getUser();
  dispatch(showUser(response));
};
export const pointsThunk = (points) => async (dispatch) => {
  const response = await getPoints(points);
  dispatch(addPoints(response));
};