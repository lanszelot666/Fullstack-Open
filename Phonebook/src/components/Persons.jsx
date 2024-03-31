import Person from "./Person";

const Persons = ({ persons, filter, toggleDeleteOf }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredPersons.map((person) => (
    <Person
      key={person.id}
      name={person.name}
      number={person.number}
      toggleDelete={() => toggleDeleteOf(person.id)}
    />
  ));
};

export default Persons;
