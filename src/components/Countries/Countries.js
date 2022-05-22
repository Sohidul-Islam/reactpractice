import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css";

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
        // console.log(`found ${countries.length} countries and the objects are \n ${countries}`);
        console.log(countries);
    }, [])
    return (
        <div>
            <h1>This is a country</h1>
            <div className="countries-container">
                {countries.map((country, key) => <Country key={key} country={country.name.common} official={country.name.official} img={country.flags.png}></Country>)}
            </div>

        </div>
    );
};

export default Countries;