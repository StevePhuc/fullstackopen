import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/persons").then(response => {
            console.log(response);

            setPersons(response.data);
        });
    }, []);

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
        const addPersonObj = { name: newName, number: newNumber };
        setPersons([...persons, addPersonObj]);
        setNewName("");

        Axios.post("http://localhost:3001/persons", addPersonObj).then(response => {
            console.log(response);
        });
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
