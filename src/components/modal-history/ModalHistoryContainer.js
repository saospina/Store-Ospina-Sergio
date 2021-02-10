import { connect } from 'react-redux'
import ModalHistoryComponent from './ModalHistoryComponent';
import { hideModal } from '../../redux/actions/HistoryAction';

const mapStateToProps = ({ HistoryReducer }) => {
    const { data, isModal } = HistoryReducer
    return {
        products: data,
        modal: isModal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClose: (isOpen) => {
            dispatch(hideModal(isOpen));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalHistoryComponent)





