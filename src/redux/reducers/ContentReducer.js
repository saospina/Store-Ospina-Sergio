import { SHOW_MOST_RECENT_PRODUCTS, SHOW_LOWEST_PRICE_PRODUCTS, SHOW_HIGHEST_PRICE_PRODUCTS, SHOW_SPINNER, HIDE_SPINNER } from "../actions/ContentAction";
import { selectLowestPrice, selectHighestPrice } from "../selectors/index";

const initialState = {
    data: [],
    isloading: false
}

const ContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MOST_RECENT_PRODUCTS:
            return {...state, data: action.payload.mostRecentProducts};
        case SHOW_LOWEST_PRICE_PRODUCTS:
            return {...state, data: selectLowestPrice(action.payload.lowestPriceProducts)}
        case SHOW_HIGHEST_PRICE_PRODUCTS:
            return {...state, data: selectHighestPrice(action.payload.highestPriceProducts)}
        case SHOW_SPINNER:
            return { ...state, isloading: true };
        case HIDE_SPINNER:
            return { ...state, isloading: false };
        default:
            return state
    }
};

export default ContentReducer;