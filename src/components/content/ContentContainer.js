import { connect } from "react-redux";

import ContentComponent from "./ContentComponent";
import { ContentThunk } from "../../redux/thunks/ContentThunk";

const mapStateToProps = ({ ContentReducer }) => {
    console.log(ContentReducer, 'This is the state');
    return {
        productsList: ContentReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getListProducts: () => {
            dispatch(ContentThunk());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);