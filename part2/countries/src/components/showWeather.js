import React, { useState, useEffect } from "react";
import Axios from "axios";

const ShowWeather = ({ countryView }) => {
    const initial = { temp_c: null, wind_kph: null, wind_dir: null, condition: { icon: null } };
    const [weather, setWeather] = useState(initial);
    useEffect(() => {
        Axios.get(
            `http://api.apixu.com/v1/current.json?key=b015dde075e342f5acc70528192807&q=${countryView.capital}`
        ).then(response => {
            setWeather(response.data.current);
        });
    });
    const { temp_c, wind_kph, wind_dir, condition } = weather;
    return (
        <div>
            <h2>weather in {countryView.capital}</h2>
            <p>temperature: {temp_c} Celsius</p>
            <img src={condition.icon} alt={countryView.capital} />
            <p>
                wind: {wind_kph} kph direction {wind_dir}
            </p>
        </div>
    );
};

export default ShowWeather;
