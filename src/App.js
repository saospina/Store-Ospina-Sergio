import ContentContainer from "./components/content/ContentContainer";
import FilterContainer from "./components/filter/FilterContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import GlobalSpinnerContainer from './components/global-spinner/GlobalSpinnerContainer';


function App() {
  return (
    <>
    <GlobalSpinnerContainer />
    <div className="App">
      <HeaderContainer />
      <FilterContainer />
      <ContentContainer />
    </div>
    </>
  );
}

export default App;
