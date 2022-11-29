import { useEffect, useState } from 'react';
import { getCountries } from './services/getCountries';
import './App.css';
import { getCities } from './services/cities';
import { getCityWeather } from './services/weather';


function App() {
   const [countries, setCountries] = useState ([]);
   const [cities, setCities] = useState ([]);
   const [weather, setWeather] = useState(null);


   useEffect(() => {
      (async () => {
         setCountries (await getCountries());
      })();
   }, []);


   const countryHandler = async e => {
      e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
      setWeather(null);
   }

   const cityHandler = async e => e.currentTarget.value && setWeather(await getCityWeather(e.currentTarget.value));



   return (
      <div div className='App'>
         <div>
            <label>Elije un pais:</label>
            <select onChange={countryHandler}>
               <option value="">Selecciona</option>
               {countries.map(country => <option key={country.cca2} value={country.cca2}> {country.name.common} </option>)}
            </select>         
         </div>
         
         {cities.length > 0 && (
            <div>
               <label>Elije una ciudad:</label>
               <select onChange={cityHandler}>
               <option value="">Selecciona</option>
                  {cities.map(city => <option key={city.id}> {city.name} </option>)}
               </select> 
            </div>
         )}

         <hr />

         {weather  && (
            <div>
               <h2>Actual temperatura: {weather.main.temp}º</h2>
               <p>Min: {weather.main.temp_min.toFixed()}°</p>
               <p>Max: {weather.main.temp_max.toFixed()}°</p>
               <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
            </div>
         )}

      </div>
  )
}

export default App
