export const SHOW_MODAL_HISTORY = "SHOW_MODAL_HISTORY";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

// action creator
export const showModalHistory = (historyProducts) => ({
    type: SHOW_MODAL_HISTORY,
    payload: { historyProducts }
  });
  export const showModal = () => dispatch => {
    dispatch({
      type: "SHOW_MODAL"
    })
  };
  export const hideModal = () => dispatch => {
    dispatch({
      type: "HIDE_MODAL"
    })
  };