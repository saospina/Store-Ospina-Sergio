import { SHOW_MODAL_HISTORY, SHOW_MODAL, HIDE_MODAL } from '../actions/HistoryAction';

const initialState = {
    data: [],
    isModal: false
}

const HistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL_HISTORY:
            return { ...state, data: action.payload.historyProducts };
        case SHOW_MODAL:
            return { ...state, isModal: true };
        case HIDE_MODAL:
            return { ...state, isModal: false };
        default:
            return state
    }
}

export default HistoryReducer;