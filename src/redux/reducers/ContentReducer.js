import { SHOW_MOST_RECENT_PRODUCTS, SHOW_LOWEST_PRICE_PRODUCTS, SHOW_HIGHEST_PRICE_PRODUCTS } from "../actions/ContentAction";
import { selectLowestPrice, selectHighestPrice } from "../selectors/index";

const ContentReducer = (state = [], action) => {
    switch (action.type) {
        case SHOW_MOST_RECENT_PRODUCTS:
            return action.payload.mostRecentProducts;
        case SHOW_LOWEST_PRICE_PRODUCTS:
            return selectLowestPrice(action.payload.lowestPriceProducts)
        case SHOW_HIGHEST_PRICE_PRODUCTS:
            return selectHighestPrice(action.payload.highestPriceProducts)
        default:
            return state
    }
};

export default ContentReducer;