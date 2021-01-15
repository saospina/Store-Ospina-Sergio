import { showUser, addPoints } from "../actions/UserAction";
import { getUser, addPointsService } from '../../services/apiServices';

export const userThunk = () => async (dispatch) => {
  const response = await getUser();
  dispatch(showUser(response));
};
export const pointsThunk = (points) => async (dispatch) => {
  console.log(points, 'points in thunks');
  const response = await addPointsService(points);
  dispatch(addPoints(response));
};