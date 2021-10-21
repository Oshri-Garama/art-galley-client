import Search from "./components/Search/Search";
import Gallery from "./components/Gallery/Gallery";
import { GeneralStyles } from "./App.style";

const App = () => {
  return (
    <GeneralStyles>
      <Search />
      <Gallery />
    </GeneralStyles>
  );
};

export default App;
