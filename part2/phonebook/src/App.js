import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import services from "./services";
import Notification from "./components/Notification/Notification";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [searchName, setSearchName] = useState("");
    const [message, setMessage] = useState(null);

    useEffect(() => {
        services.getAll().then(response => {
            // console.log(response);

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
        // console.log(index);
        const findPersonObj = persons.find(person => (person.id === index ? person : null));
        if (!window.confirm(`Delete ${findPersonObj.name}`)) {
            return;
        }
        services.deletePerson(index).then(response => {
            if (response.statusText === "OK") {
                const newPersons = persons.filter(person => person.id !== index);
                setPersons(newPersons);
            }
        });
    };

    const addPerson = e => {
        e.preventDefault();
        const findPersonObj = persons.find(person => person.name === newName);
        // console.log(findPersonObj);

        if (findPersonObj) {
            if (window.confirm(`${newName} is already added to phonebook,replace the old number with a new one?`)) {
                findPersonObj.number = newNumber;
                services.update(findPersonObj.id, findPersonObj);
                const updatePersons = persons.map(person => (person.id === findPersonObj.id ? findPersonObj : person));
                setPersons(updatePersons);
                setMessage(`Number is change for ${newName}`);
            }
            return;
        }
        const addPersonObj = { name: newName, number: newNumber };

        services.create(addPersonObj).then(response => {
            // console.log(response);
            setPersons([...persons, response.data]);
            setMessage(`Added ${newName}`);
            setNewName("");
            setNewNumber("");
        });
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={message} />
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
