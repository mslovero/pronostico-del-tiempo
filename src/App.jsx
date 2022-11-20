import { useEffect, useState } from 'react';
import { getCountries } from './services/getCountries';
import './App.css';
import { getCities } from './services/cities';


function App() {
   const [countries, setCountries] = useState ([]);
   const [cities, setCities] = useState ([]);

   useEffect(() => {
      (async () => {
         setCountries (await getCountries());
         const temp = await getCities();
         console.log(temp);
      })();
   }, []);


   const countryHandler = e =>{
      const country = e.currentTarget.value;
      console.log(country)
   }
   


   return (
      <div div className='App'>
         <div>
            <label>Elije un pais:</label>
            <select onChange={countryHandler}>
               {countries.map(country => <option key={country.cca2} value={country.cca2}> {country.name.common} </option>)}
            </select>         
         </div>
      </div>
  )
}

export default App
