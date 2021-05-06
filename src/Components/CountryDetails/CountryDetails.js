import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetails.css'

const CountryDetails = () => {
    const {countryName} = useParams();
    const [details, setDetails] = useState({});
    
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data[0]))
    }, [])
    
    console.log(details)
    return (
        <div className="main-box">
          <div className="details-box">
            <h1>Showing Details Of {countryName}</h1>
            <h2>Name: {details.name}</h2>
            <h3>Capital: {details.capital}</h3>
            <h3>Region: {details.region}</h3>
            <h3>Population: {details.population}</h3>
            <h3>Area:  {details.area}</h3>
            <img className="flag" src={details.flag} alt=""/>
          </div>
        </div>
    );
};

export default CountryDetails;