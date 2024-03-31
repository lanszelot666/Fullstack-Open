const PersonForm = ({
  handleSubmit,
  handleNameChange,
  handleNumberChange,
  name,
  number,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input value={name} onChange={handleNameChange} />
      </div>
      <div>
        Phone number: <input value={number} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;
