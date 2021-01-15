export const SHOW_USER = "SHOW_USER";
export const ADD_POINTS = "ADD_POINTS";

// action creator
export const showUser = (userInfo) => ({
  type: SHOW_USER,
  payload: { userInfo }
});
export const addPoints = (pointsUpdated) => ({
  type: ADD_POINTS,
  payload: { pointsUpdated }
});