import { REDEEM_BY_PRODUCT } from "../actions/ContentAction";


const RedeemReducer = (state = [], action) => {
    switch (action.type) {
        case REDEEM_BY_PRODUCT:
            return action.payload.redeemedProduct;
        default:
            return state
    }
}
export default RedeemReducer;
