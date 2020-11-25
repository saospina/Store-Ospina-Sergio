import { connect } from "react-redux";

import FilterComponent from './FilterComponent';
import { mostRecentProductsThunk, lowestPriceProductsThunk, highestPriceProductsThunk } from "../../redux/thunks/ContentThunk";


const mapDispatchToProps = (dispatch) => {
    return {
        getMostRecentProducts: () => {
            dispatch(mostRecentProductsThunk());
        },
        getLowestPriceProducts: () => {
            dispatch(lowestPriceProductsThunk());
        },
        getHighestPriceProducts: () => {
            dispatch(highestPriceProductsThunk());
        },

    };
};

export default connect(null, mapDispatchToProps)(FilterComponent);