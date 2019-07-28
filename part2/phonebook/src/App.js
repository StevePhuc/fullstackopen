import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import services from "./services";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        services.getAll().then(response => {
            console.log(response);

            setPersons(response.data);
        });
    }, []);

    const personsFilter = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()));

    const handleNewName = e => {
        setNewName(e.target.value);
    };
    const handleNewNumber = e => {
        setNewNumber(e.target.value);
    };
    const handleSearchName = e => {
        setSearchName(e.target.value);
    };

    const handlePersonDelete = index => {
        console.log(index);
        services.deletePerson(index).then(response => {
            if (response.statusText === "OK") {
                const newPersons = persons.filter(person => person.id !== index);
                setPersons(newPersons);
            }
        });
    };

    const addPerson = e => {
        e.preventDefault();

        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        const addPersonObj = { name: newName, number: newNumber };

        services.create(addPersonObj).then(response => {
            console.log(response);
            setPersons([...persons, response.data]);
            setNewName("");
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

            <Persons personToShow={personsFilter} handlePersonDelete={handlePersonDelete} />
        </div>
    );
};

export default App;
