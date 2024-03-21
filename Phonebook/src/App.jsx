import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
    };

    const names = persons.map((person) => person.name);

    if (!names.includes(newName)) {
      persons.push(newPerson);
      setPersons(persons);
    } else {
      window.alert(`${newName} is already added to phonebook`);
    }

    console.log("persons: ", persons);
    console.log("name array: ", names);

    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
