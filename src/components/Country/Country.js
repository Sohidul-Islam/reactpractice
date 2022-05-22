import React from 'react';
import "./Country.css"
const Country = (props) => {
    const textStyle = {
        padding: "40px",
        textAlign: "center"
    }
    return (<div className="person-box">
        <img src={props.img} alt="" srcset="" />
        <div className="text-box" style={textStyle}>
            <h3>Country: {props.country}</h3>
            <h3>Official: {props.official}</h3>
        </div>

        {/* <h3>Email: {props.email}</h3>
        <h3>City: {props.city}</h3> */}
    </div>
    );
}
export default Country;