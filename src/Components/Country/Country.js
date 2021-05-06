import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'


const Country = (props) => {
    console.log(props.country)
    const {name, region} = props.country;
    const countryStyle = {
        border:'2px solid green',
        margin: '20px',
        padding: '20px',
        borderRadius: '5px',
        width: '20%'
    }
    const btnStyle={
        backgroundColor:'brown',
        color:'white'
    }
    return (
        <div style={countryStyle}>
            <h3>Name: {name}</h3>
            <h6>Region: {region}</h6>
            <Link to={`/details/${name}`}><button style={btnStyle}>Show Details</button></Link>
        </div>
    );
};

export default Country;