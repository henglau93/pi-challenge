import React, { useEffect, useState } from "react";
import sun from './sun.png';
import './App.css';

let radius = 695508; //reference: https://solarsystem.nasa.gov/solar-system/sun/by-the-numbers/

function App() {

  const [pi, setPiValue] = useState("3");
 
  useEffect(() => {
    async function getPiValue() {
      const response = await fetch(`https://pi-challenge.herokuapp.com/pi-challenge`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const latestPiValueJSON = await response.json();
      let piWithDecimal = latestPiValueJSON.message;
      piWithDecimal = piWithDecimal.substring(0,1) + "." + piWithDecimal.substring(1,piWithDecimal.length);
      setPiValue(piWithDecimal);
    }
  
    getPiValue();

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={sun} alt="logo" />
        <p>
          Current known value of Pi : {pi}
        </p>
        <p>
          The equatorial radius of the Sun: {radius} km
        </p>
        <p>
          The equatorial circumference of the Sun: {2*pi*radius} km
        </p>
      </header>
    </div>
  );
}

export default App;
