import { connect } from "react-redux";

import ContentComponent from "./ContentComponent";
import { mostRecentProductsThunk, redeemProductsThunk } from "../../redux/thunks/ContentThunk";
import { userThunk } from '../../redux/thunks/UserThunk';

const mapStateToProps = ({ContentReducer, UserReducer}) => {
    return {
        products: ContentReducer,
        userInfo: UserReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => {
            dispatch(mostRecentProductsThunk());
        },
        onRedeem: (productId) => {
            dispatch(redeemProductsThunk(productId));
        },
        onUser: () => {
            dispatch(userThunk());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);