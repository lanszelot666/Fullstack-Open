import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  function resetStates() {
    setNewName("");
    setNewNumber("");
  }

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const filterPhonebook = (event) => {
    setNameFilter(event.target.value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const names = persons.map((person) => person.name);
    const numbers = persons.map((person) => person.number);

    if (names.includes(newName)) {
      window.alert(
        `${newName} is already present in the phonebook. Please provide a unique name!`
      );
      setNewName("");
      return;
    }

    if (numbers.includes(newNumber)) {
      window.alert(
        `The phone number: ${newNumber} is already present in the phonebook. Please provide a unique number!`
      );
      setNewNumber("");
      return;
    }

    if (newName == "" || newNumber == "") {
      window.alert(
        "One of the fields is empty.\nPlease provide a valid name and number!"
      );
      return;
    }

    persons.push(newPerson);
    setPersons(persons);

    console.log("persons: ", persons);
    console.log("name array: ", names);

    resetStates(setNewName, setNewNumber);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown for names that include:{" "}
        <input value={nameFilter} onChange={filterPhonebook} />
      </div>
      <h2>Add new person</h2>
      <form onSubmit={addNewPerson}>
        <div>
          Name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          Phone number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
            filter={nameFilter}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
