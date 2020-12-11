import { connect } from "react-redux";

import ContentComponent from "./ContentComponent";
import { mostRecentProductsThunk } from "../../redux/thunks/ContentThunk";

const mapStateToProps = ({ContentReducer, UserReducer}) => {
    console.log(UserReducer, 'user reducer');
    return {
        products: ContentReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => {
            dispatch(mostRecentProductsThunk());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);