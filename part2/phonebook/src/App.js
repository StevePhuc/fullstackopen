import React, { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

    const personToShow = persons.map(person => {
        return <p key={person.name}>{person.name}</p>;
    });

    const handleNewName = e => {
        setNewName(e.target.value);
    };

    const addPerson = e => {
        e.preventDefault();

        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        setPersons([...persons, { name: newName }]);
        setNewName("");
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNewName} />
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
