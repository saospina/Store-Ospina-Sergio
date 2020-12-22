import { connect } from "react-redux";

import ContentComponent from "./ContentComponent";
import { mostRecentProductsThunk, redeemProductsThunk } from "../../redux/thunks/ContentThunk";

const mapStateToProps = ({ContentReducer, UserReducer}) => {
    console.log(ContentReducer, 'user products');
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
        handleRedeem: (productId) => {
            dispatch(redeemProductsThunk(productId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);