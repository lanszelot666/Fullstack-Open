const FilterForm = ({ filter: countryFilter, handleFilterChange }) => {
  return (
    <div>
      <div>
        Filter shown for names that include:{" "}
        <input value={countryFilter} onChange={handleFilterChange} />
      </div>
      <br></br>
    </div>
  );
};

export default FilterForm;
