import React from "react";

const CountriesShow = ({ countryList, countries, handleCountryShow }) => {
    const totalCountriesFilter = countryList.length;
    console.log(totalCountriesFilter);

    if (totalCountriesFilter <= 1) {
        return <div />;
    }
    if (totalCountriesFilter <= 10) {
        return countryList.map((country, index) => (
            <p key={index}>
                {country.name}
                <button onClick={() => handleCountryShow(index)}> show</button>
            </p>
        ));
    }
    if (totalCountriesFilter < countries.length) {
        return <p>Too many matches {totalCountriesFilter}, specify another filter</p>;
    }
    return <div />;
};

export default CountriesShow;
