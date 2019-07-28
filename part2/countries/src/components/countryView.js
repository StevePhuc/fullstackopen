import React from "react";

const CountryView = ({ countryView }) => {
    if (countryView == null) {
        return <div />;
    } else {
        const { name, capital, population, languages, flag } = countryView;
        return (
            <div>
                <h2>{name}</h2>
                <p>capital: {capital} </p>
                <p>population: {population} </p>
                <h2>languages</h2>
                <ul>
                    {languages.map((language, index) => (
                        <li key={index}>{language.name}</li>
                    ))}
                </ul>
                <img src={flag} alt={name} style={{ width: "100px" }} />
            </div>
        );
    }
};

export default CountryView;
