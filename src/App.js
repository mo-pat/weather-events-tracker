import '../src/style.css';
import Map from './component/Map';
import { SearchBar } from './component/SearchBar.js';

function App() {
  return (
    <div className="App">
      <h1>EONET: Natural Event Tracker</h1>
      {/* Searchbar */}
      <SearchBar />
      {/* Map or Loading */}
      <Map />
      hello
    </div>
  );
}

export default App;
