import { connect } from 'react-redux';
import GlobalSpinner from './GlobalSpinner';


const mapStateToProps = ({ContentReducer}) => {
    const {isloading} = ContentReducer
    return {
        spinner: isloading
    }
}

export default connect(mapStateToProps, null)(GlobalSpinner)