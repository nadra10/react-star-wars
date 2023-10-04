
import './App.css';
import { useState, useEffect } from 'react';
import StarShipCard from './components/StarShipCard';
import { getAllStarsships } from './services/sw-api';
import Header from './components/Header'



function App() {
  const [starships, setStarships]= useState([])

  //function to get the starship
  const getStarships = async ()=>{
    const response= await getAllStarsships()

    setStarships(response)
  }

  useEffect(()=>{
getStarships();
  }, [])


  const starshipList = starships.map(starship=>(
    <StarShipCard key = {starship.name} starship={starship} />
  ))

  return (
    <div className="App">
      <Header />
      {starshipList}

    </div>
  );
}

export default App;
