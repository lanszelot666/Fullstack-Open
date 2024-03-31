import { useState, useEffect } from "react";
import Country from "./Country";
import countryService from "../services/countries";

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

  console.log("Countries all passed: ", countriesAll);
  console.log("Filter passed: ", countryFilter);
  console.log("Fetched country state: ", fetchedCountry);
  console.log("Filtered countries: ", filteredCountries);
  console.log("Filtered countries length: ", filteredCountries.length);

  const toggleCountryView = (countryName) => {
    console.log(`Button triggered for ${countryName}`);

    countryService
      .getOne(countryName)
      .then((fetchedCountryData) => {
        console.log("FETCHED: ", fetchedCountryData);
        setFetchedCountry(fetchedCountryData);
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
