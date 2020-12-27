import ContentContainer from "./components/content/ContentContainer";
import FilterContainer from "./components/filter/FilterContainer";
import HeaderContainer from "./components/header/HeaderContainer";


function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <FilterContainer />
      <ContentContainer />
    </div>
  );
}

export default App;