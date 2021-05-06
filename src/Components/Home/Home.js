import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css';

const Home = () => {
    const [country , setCountry] = useState([]);
    useEffect(() => {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountry(data))
    }, [])
    return (
        <div>
           <div className="heading">
           <h1>Countries Around The World ({country.length})!</h1>
           </div>

      <div className="country">  
      {
       country.map(country => <Country country={country}></Country>)
      }
      </div>

    </div>
    );
};

export default Home;