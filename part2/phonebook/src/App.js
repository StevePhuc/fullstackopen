import React, { useState } from "react";

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
            <div>
                Filter shown with: <input value={searchName} onChange={handleSearchName} />
            </div>
            <h2>Add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNewName} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNewNumber} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>debug: {newName}</div>
            <div>{personToShow}</div>
        </div>
    );
};

export default App;
