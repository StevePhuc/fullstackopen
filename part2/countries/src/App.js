import React, { useState, useEffect } from "react";
import Axios from "axios";
import CountriesShow from "./components/countriesShow";
import CountryView from "./components/countryView";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");
    const [countryList, setCountryList] = useState([]);
    const [countryView, setCountryView] = useState(null);

    useEffect(() => {
        Axios.get("https://restcountries.eu/rest/v2/all").then(response => {
            setCountries(response.data);
        });
    }, []);

    const handleSearchCountry = e => {
        const searchInput = e.target.value;
        setSearchCountry(searchInput);

        const countriesFilter = countries.filter(country =>
            country.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setCountryList(countriesFilter);
        if (countriesFilter.length === 1) {
            setCountryView(countriesFilter[0]);
        } else {
            setCountryView(null);
        }
    };

    const handleCountryShow = index => {
        // console.log(countryList[index]);
        setCountryView(countryList[index]);
    };

    return (
        <div>
            <span>find countries </span>
            <input onChange={handleSearchCountry} value={searchCountry} />
            <CountriesShow countryList={countryList} countries={countries} handleCountryShow={handleCountryShow} />
            <CountryView countryView={countryView} />
        </div>
    );
};

export default App;
