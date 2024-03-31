import { useState, useEffect } from "react";
import FilterForm from "./components/FilterForm";
import countriesService from "./services/countries";
import Countries from "./components/Countries";

function App() {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  // Fetch the data from the json-server /persons endpoint and fill out the initial state of persons
  useEffect(() => {
    countriesService.getAll().then((countriesAll) => {
      setCountries(countriesAll);
      console.log("Initial countries: ", countriesAll);
    });
  }, []);

  return (
    <div>
      <h1>Countries App</h1>

      <h2>Filter</h2>
      <FilterForm countryFilter={filter} handleFilterChange={handleFilter} />

      <Countries countriesAll={countries} countryFilter={filter} />
    </div>
  );
}

export default App;
