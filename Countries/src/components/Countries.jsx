import { useState, useEffect } from "react";
import Country from "./Country";
import countryService from "../services/countries";
import weatherService from "../services/weather";

const Countries = ({ countriesAll, countryFilter }) => {
  const [fetchedCountry, setFetchedCountry] = useState(null); // State to store the fetched country

  useEffect(() => {
    if (!countryFilter) {
      console.log("Inside useEffect");
      setFetchedCountry(null);
    }
  }, [countryFilter]);

  const filteredCountries = countriesAll.filter((country) =>
    country.name.toLowerCase().includes(countryFilter.toLowerCase())
  );

  console.log("Filter passed: ", countryFilter);
  console.log("Fetched country state: ", fetchedCountry);

  const toggleCountryView = (countryName) => {
    console.log(`Button triggered for ${countryName}`);

    countryService
      .getOne(countryName)
      .then((fetchedCountryData) => {
        console.log("FETCHED: ", fetchedCountryData);
        return weatherService
          .getWeather(fetchedCountryData.capital)
          .then((weatherData) => {
            return { fetchedCountryData, weatherData }; // Return both fetchedCountryData and weatherData as a combined result
          });
      })
      .then((combinedData) => {
        console.log("WEATHER DATA: ", combinedData.weatherData);
        console.log("COUNTRY DATA: ", combinedData.fetchedCountryData);

        const enrichedCountry = {
            ...combinedData.fetchedCountryData,
            weather: {
                temperature: (combinedData.weatherData.main.temp - 273.15).toFixed(2),
                wind: (combinedData.weatherData.wind.speed * 3.6).toFixed(2),
                icon: `https://openweathermap.org/img/wn/${combinedData.weatherData.weather[0].icon}@2x.png`,
                description: combinedData.weatherData.weather[0].description,
            }
        }
        console.log("ENRICHED DATA: ", enrichedCountry);

        setFetchedCountry(enrichedCountry);
      })
      .catch((error) =>
        console.error("Failed to fetch country details:", error)
      );
  };

  // CASE 1 - show all countries
  if (filteredCountries.length <= 10 && filteredCountries.length >= 1) {
    return (
      <div>
        {filteredCountries.map((country) => (
          <div key={country.id}>
            {country.name}{" "}
            <button onClick={() => toggleCountryView(country.name)}>
              Show
            </button>
          </div>
        ))}
        {fetchedCountry && <Country country={fetchedCountry} />}
      </div>
    );
  }

  // DEFAULT CASE - too many matches
  return <div>Too many matches. Specify another filter.</div>;
};

export default Countries;
