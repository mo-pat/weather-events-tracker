import '../src/style.css';
import Map from './component/Map';
import { SearchBar } from './component/SearchBar.js';
import { Loader } from './component/Loader.js'
import { useState, useEffect } from 'react'

function App() {

  const NASA_URL = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch(NASA_URL)
      const { events } = await res.json();
      console.log(events)

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()

  }, [])

  return (
    <div className="App">
      <h1>EONET: Natural Event Tracker</h1>
      {/* Searchbar */}
      <SearchBar />
      {/* Map or Loading */}
      { !loading ? <Map eventData={eventData}/> : <Loader />}
      hello
    </div>
  );
}

export default App;
