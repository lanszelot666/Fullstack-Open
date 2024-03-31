const FilterForm = ({ filter: countryFilter, handleFilterChange }) => {
  return (
    <div>
      filter shown for names that include:{" "}
      <input value={countryFilter} onChange={handleFilterChange} />
    </div>
  );
};

export default FilterForm;
