import { connect } from 'react-redux'
import ModalHistoryComponent from './ModalHistoryComponent';
import { hideModal } from '../../redux/actions/HistoryAction';

const mapStateToProps = ({ HistoryReducer }) => {

    const { data, modalType } = HistoryReducer
    return {
        products: data,
        modal: (modalType === 'history') ? true : false
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





