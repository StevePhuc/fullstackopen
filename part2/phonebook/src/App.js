import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456" },
        { name: "Ada Lovelace", number: "39-44-5323523" },
        { name: "Dan Abramov", number: "12-43-234345" },
        { name: "Mary Poppendieck", number: "39-23-6423122" }
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [searchName, setSearchName] = useState("");

    const personsFilter = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()));

    const personToShow = personsFilter.map(person => {
        return (
            <p key={person.name}>
                {person.name} {person.number}
            </p>
        );
    });

    const handleNewName = e => {
        setNewName(e.target.value);
    };
    const handleNewNumber = e => {
        setNewNumber(e.target.value);
    };
    const handleSearchName = e => {
        setSearchName(e.target.value);
    };

    const addPerson = e => {
        e.preventDefault();

        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        setPersons([...persons, { name: newName, number: newNumber }]);
        setNewName("");
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter searchName={searchName} handleSearchName={handleSearchName} />
            <h2>Add a new</h2>
            <PersonForm
                newName={newName}
                newNumber={newNumber}
                handleNewName={handleNewName}
                handleNewNumber={handleNewNumber}
                addPerson={addPerson}
            />
            <h2>Numbers</h2>

            <Persons personToShow={personToShow} />
        </div>
    );
};

export default App;
