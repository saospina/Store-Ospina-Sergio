import { showUser, addPoints } from "../actions/UserAction";
import { getUser, addPointsService } from '../../services/apiServices';
import { showSpinner, hideSpinner } from '../actions/ContentAction';

export const userThunk = () => async (dispatch) => {
  const response = await getUser();
  dispatch(showUser(response));
};
export const pointsThunk = (points) => async (dispatch) => {
  dispatch(showSpinner());
  const response = await addPointsService(points);
  dispatch(addPoints(response));
  dispatch(hideSpinner());
};