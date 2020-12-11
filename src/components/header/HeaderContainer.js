import { connect } from "react-redux";

import HeaderComponent from "./HeaderComponent";
import { userThunk, pointsThunk } from "../../redux/thunks/UserThunk";

const mapStateToProps = ({UserReducer}) => {
    console.log(UserReducer, 'userInfooo ');
    return {
        userInfo: UserReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUser: () => {
            dispatch(userThunk());
        },
        onPoints: (points) => {
            dispatch(pointsThunk(points));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);