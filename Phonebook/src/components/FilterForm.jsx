const FilterForm = ({ filter, handleFilterChange }) => {
  return (
    <div>
      filter shown for names that include:{" "}
      <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default FilterForm;