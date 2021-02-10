import { showSpinner, hideSpinner } from '../actions/ContentAction';
import { getHistory } from '../../services/apiServices';
import { showModalHistory, showModal } from '../actions/HistoryAction';

export const historyThunk = () => async (dispatch) => {
    dispatch(showSpinner());
    const response = await getHistory();
    dispatch(showModalHistory(response));
    dispatch(hideSpinner());
    dispatch(showModal());
  };