import React, { useState, useEffect } from "react";
import Axios from "axios";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");

    useEffect(() => {
        Axios.get("https://restcountries.eu/rest/v2/all").then(response => {
            console.log(response);

            setCountries(response.data);
        });
    }, []);

    const countriesFilter = countries.filter(country =>
        country.name.toLowerCase().includes(searchCountry.toLowerCase())
    );

    const countriesToShow = countriesFilter => {
        const totalCountriesFilter = countriesFilter.length;
        console.log(countriesFilter);
        if (totalCountriesFilter === 1) {
            return countriesFilter.map(({ name, capital, languages, flag, population }, index) => (
                <div key={index}>
                    <h2>{name}</h2>
                    <p>capital: {capital} </p>
                    <p>population: {population} </p>
                    <h2>languages</h2>
                    <ul>
                        {languages.map((language, index) => (
                            <li key={index}>{language.name}</li>
                        ))}
                    </ul>
                    <img src={flag} alt={name} />
                </div>
            ));
        }
        if (totalCountriesFilter <= 10) {
            return countriesFilter.map((country, index) => <p key={index}>{country.name}</p>);
        }
        if (totalCountriesFilter < countries.length) {
            return <p>Too many matches {totalCountriesFilter},specify another filter</p>;
        }
    };

    const handleSearchContry = e => {
        setSearchCountry(e.target.value);
    };

    return (
        <div>
            <span>find countries </span>
            <input onChange={handleSearchContry} value={searchCountry} />
            {countriesToShow(countriesFilter)}
        </div>
    );
};

export default App;
