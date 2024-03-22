import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import FilterForm from "./components/FilterForm";
import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNameFilter] = useState("");

  // Fetch the data from the json-server /persons endpoint and fill out the initial state of persons
  useEffect(() => {
    console.log("effect");
    axios.get(baseUrl).then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  console.log("Initial state of persons: ", persons);

  const resetStates = () => {
    setNewName("");
    setNewNumber("");
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setNameFilter(event.target.value);
  };

  const isInputDataCorrect = () => {
    const names = persons.map((person) => person.name);
    const numbers = persons.map((person) => person.number);

    if (names.includes(newName)) {
      window.alert(
        `${newName} is already present in the phonebook. Please provide a unique name!`
      );
      setNewName("");
      return false;
    }

    if (numbers.includes(newNumber)) {
      window.alert(
        `The phone number: ${newNumber} is already present in the phonebook. Please provide a unique number!`
      );
      setNewNumber("");
      return false;
    }

    if (newName == "" || newNumber == "") {
      window.alert(
        "One of the fields is empty.\nPlease provide a valid name and number!"
      );
      return false;
    }
    return true;
  };

  const addNewPerson = (event) => {
    event.preventDefault();

    if (isInputDataCorrect()) {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      axios.post(baseUrl, newPerson).then((response) => {
        console.log("response.data: ", response.data);
        const newPersons = persons.concat(response.data);
        setPersons(newPersons);
        console.log("Persons after post request: ", newPersons);
      });

      resetStates();
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Filter</h2>
      <FilterForm filter={filter} handleFilterChange={handleFilter} />

      <h2>Add new person</h2>
      <PersonForm
        handleSubmit={addNewPerson}
        handleNameChange={handleNewName}
        handleNumberChange={handleNewNumber}
        name={newName}
        number={newNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;
