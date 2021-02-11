import { connect } from 'react-redux'
import ConfirmationModalComponent from './ConfirmationModalComponent'

import { hideModal } from '../../redux/actions/HistoryAction';


const mapStateToProps = ({ HistoryReducer }) => {
    const { modalType } = HistoryReducer
    return {
        smShow: (modalType === 'confirmation') ? true : false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClose: (isOpen) => {
            dispatch(hideModal(isOpen));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationModalComponent)
