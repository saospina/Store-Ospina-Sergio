export const SHOW_USER = "SHOW_USER";
export const ADD_POINTS = "SHOW_USER";

// action creator
export const showUser = (userInfo) => ({
  type: SHOW_USER,
  payload: { userInfo }
});
export const addPoints = (pointsUpdated) => ({
  type: ADD_POINTS,
  payload: { pointsUpdated }
});