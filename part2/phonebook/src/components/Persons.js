import React, { useState } from "react";
import services from "../services";

const Persons = ({ personToShow, handlePersonDelete }) => {
    return personToShow.map(person => {
        return (
            <p key={person.id}>
                {person.name} {person.number} <button onClick={() => handlePersonDelete(person.id)}>delete</button>
            </p>
        );
    });
};

export default Persons;
