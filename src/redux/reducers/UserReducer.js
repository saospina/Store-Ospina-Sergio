import { SHOW_USER, ADD_POINTS } from "../actions/UserAction";

const UserReducer = (state = [], action) => {
    switch (action.type) {
        case SHOW_USER:
            return action.payload.userInfo;
        case ADD_POINTS:
            return action.payload.pointsUpdated;
        default:
            return state
    }
};

export default UserReducer;