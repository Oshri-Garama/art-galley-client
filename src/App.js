import Search from './components/Search/Search';
import Gallery from './components/Gallery/Gallery'
import { GalleryProvider } from './context/GalleryContext';

const App = () => {
  return (
    <div className="App">
      <GalleryProvider>
        <Search/>
        <Gallery/>
      </GalleryProvider>
    </div>
  );
}

export default App;
