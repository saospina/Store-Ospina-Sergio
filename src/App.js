import ContentContainer from "./components/content/ContentContainer";
import FilterContainer from "./components/filter/FilterContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import GlobalSpinnerContainer from './components/global-spinner/GlobalSpinnerContainer';
import ModalHistoryContainer from "./components/modal-history/ModalHistoryContainer";
import ConfirmationModalContainer from "./components/confirmation-modal/ConfirmationModalContainer";


function App() {
  return (
    <>
      <GlobalSpinnerContainer />
      <ModalHistoryContainer />
      <ConfirmationModalContainer />
      <div className="App">
        <HeaderContainer />
        <FilterContainer />
        <ContentContainer />
      </div>
    </>
  );
}

export default App;
