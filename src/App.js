import Search from "./components/Search/Search";
import Gallery from "./components/Gallery/Gallery";
import { GalleryProvider } from "./context/GalleryContext";
import { GeneralStyles } from "./App.style";

const App = () => {
  return (
    <div className="App">
      <GalleryProvider>
        <GeneralStyles>
          <Search />
          <Gallery />
        </GeneralStyles>
      </GalleryProvider>
    </div>
  );
};

export default App;
