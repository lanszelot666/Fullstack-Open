const Person = ({ name, number, filter }) => {
  if (name.toLowerCase().includes(filter.toLowerCase()))
    return (
      <div>
        {name} {number}
      </div>
    );
};

export default Person;
