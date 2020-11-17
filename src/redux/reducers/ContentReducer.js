import { SHOW_LIST_PRODUCTS } from "../actions/ContentAction";

const ContentReducer = (state = [], action) => {
    switch (action.type) {
        case SHOW_LIST_PRODUCTS:
            return action.payload.listProducts;
        default:
            return state
    }
};

export default ContentReducer;