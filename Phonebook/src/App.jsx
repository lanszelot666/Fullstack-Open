import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import FilterForm from "./components/FilterForm";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNameFilter] = useState("");
  const [maxId, setMaxId] = useState(0);

  // Fetch the data from the json-server /persons endpoint and fill out the initial state of persons
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      const initialMaxId =
        initialPersons.length == 0
          ? 0
          : Math.max(...initialPersons.map((person) => person.id));

      setPersons(initialPersons);
      setMaxId(initialMaxId);

      console.log("[GET] - Initial state of persons: ", initialPersons);
      console.log("[GET] - Initial maxId: ", initialMaxId);
    });
  }, []);

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
    const numbers = persons.map((person) => person.number);
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

    // Check if both fields are filled --> initialize a newPerson object
    if (isInputDataCorrect()) {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: undefined,
      };

      // CASE 1: Name already exists in the Phonebook --> PUT request if confirmed
      const names = persons.map((person) => person.name);
      if (names.includes(newName)) {
        if (
          window.confirm(
            `${newName} is already added to the phonebook. Replace the old number with the new one?`
          )
        ) {
          const existingPerson = persons.find(
            (person) => person.name === newName
          );

          newPerson.id = existingPerson.id;
          console.log("[PUT] - New person to be updated: ", newPerson);
          personService
            .update(existingPerson.id, newPerson)
            .then((updatedPerson) => {
              console.log("[PUT] - Updated person: ", updatedPerson);
              const newPersons = persons.map((person) =>
                person.id === newPerson.id ? newPerson : person
              );
              setPersons(newPersons);
              console.log("[PUT] - Persons after update: ", persons);
            });
          resetStates();
          return;
        }
      }

      // CASE 2: Name does not exist in the Phonebook yet --> POST request
      newPerson.id = (maxId + 1).toString();
      setMaxId(maxId + 1);
      console.log("[POST] - New person to be added: ", newPerson);

      personService.create(newPerson).then((addedPerson) => {
        console.log("[POST] - Added person: ", addedPerson);
        const newPersons = persons.concat(addedPerson);
        setPersons(newPersons);
        console.log("[POST] - Persons after add: ", newPersons);
      });

      resetStates();
    }
  };

  const deletePerson = (id) => {
    const personToBeDeleted = persons.find((person) => person.id === id);
    console.log("[DELETE] - Person to be deleted: ", personToBeDeleted);

    if (window.confirm(`Delete ${personToBeDeleted.name} ?`)) {
      personService.remove(id).then((deletedPerson) => {
        console.log(`[DELETE] - Deletion happened for ${deletedPerson.name}`);
        const filteredPersons = persons.filter((person) => person.id !== id);
        console.log("[DELETE] - Persons after deletion: ", filteredPersons);
        setPersons(filteredPersons);
      });
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
      <Persons
        persons={persons}
        filter={filter}
        toggleDeleteOf={deletePerson}
      />
    </div>
  );
};

export default App;
