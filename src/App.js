
import './App.css';
import Navbar from "../src/components/Navbar"
import data from './components/data';
import Hero from './components/hero';

function App() {

  const cards= data.map((item)=>{
    return(
      <Hero
      // img={item.imageUrl}
      // title={item.title}
      // location={item.location}
      // googleMap={item.googleMapsUrl}
      // startDate={item.startDate}
      // endDate={item.endDate}
      // description={item.description}
      // locIcon={item.locationIcon}
      
      //OR

      item={item}
      />
      

    )
  })
  return (
    <div className="App">
      <div className="container">
      <Navbar/>
      
      <section>
      {cards}
      </section>
      </div>
      </div>
  );
}

export default App;
