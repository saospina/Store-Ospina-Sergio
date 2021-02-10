import { connect } from "react-redux";

import HeaderComponent from "./HeaderComponent";
import { userThunk, pointsThunk } from "../../redux/thunks/UserThunk";
import { historyThunk } from '../../redux/thunks/HistoryThunk';

const mapStateToProps = ({UserReducer}) => {
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
        },
        onHistory: () => {
            dispatch(historyThunk())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);