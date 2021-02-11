import { SHOW_MODAL_HISTORY, SHOW_MODAL, HIDE_MODAL } from '../actions/HistoryAction';

const initialState = {
    data: [],
    isModal: false,
    modalType: null
}

const HistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL_HISTORY:
            return { ...state, data: action.payload.historyProducts };
        case SHOW_MODAL:
            return { 
                ...state, 
                modalType: action.modalType 
            };
        case HIDE_MODAL:
            return initialState
        default:
            return state
    }
}

export default HistoryReducer;