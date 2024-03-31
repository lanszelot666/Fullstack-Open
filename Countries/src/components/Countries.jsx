import { useState, useEffect, useRef } from "react";
import Country from "./Country";
import countryService from "../services/countries";

const Countries = ({ countriesAll, countryFilter }) => {
  const [fetchedCountry, setFetchedCountry] = useState(null); // State to store the fetched country
  const fetchDataRef = useRef(false);

  const filteredCountries = countriesAll.filter((country) =>
    country.name.toLowerCase().includes(countryFilter.toLowerCase())
  );

  console.log("Countries all passed: ", countriesAll);
  console.log("Filter passed: ", countryFilter);
  console.log("Filtered countries: ", filteredCountries);
  console.log("Filtered countries length: ", filteredCountries.length);

  useEffect(() => {
    // Check if there's exactly one filtered country and we haven't already fetched the data
    if (filteredCountries.length === 1 && !fetchDataRef.current) {
      countryService
        .getOne(filteredCountries[0].name)
        .then((fetchedCountryData) => {
          console.log("FETCHED: ", fetchedCountryData);
          setFetchedCountry(fetchedCountryData);
          fetchDataRef.current = true; // Indicate that the data has been fetched
        })
        .catch((error) =>
          console.error("Failed to fetch country details:", error)
        );
    } else if (filteredCountries.length !== 1) {
      fetchDataRef.current = false; // Reset fetchDataRef if the filter changes to allow a new fetch for a different query
      setFetchedCountry(null); // Also reset fetchedCountry to handle new searches
    }
  }, [filteredCountries]); // Depend on `filteredCountries`

  // CASE 1 - show all countries
  if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return (
      <div>
        {filteredCountries.map((country) => (
          <div key={country.id}>{country.name}</div>
        ))}
      </div>
    );
  }

  // CASE 2 - only 1 country to show
  if (filteredCountries.length === 1) {
    return fetchedCountry ? (
      <div>
        <Country country={fetchedCountry} />
      </div>
    ) : (
      <div>Loading country details...</div>
    );
  }

  // DEFAULT CASE - too many matches
  return <div>Too many matches. Specify another filter.</div>;
};

export default Countries;
