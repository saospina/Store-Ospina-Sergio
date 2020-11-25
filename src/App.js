import { HeaderComponent } from "./components/header/HeaderComponent";
import ContentContainer from "./components/content/ContentContainer";
import FilterContainer from "./components/filter/FilterContainer";


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <FilterContainer />
      <ContentContainer />
    </div>
  );
}

export default App;
