import React from 'react';
import "./Country.css"
const Country = (props) => {

    const { name, flags } = props.country;
    const textStyle = {
        padding: "40px",
        textAlign: "center"
    }
    return (
        // method 2
        <div className="person-box">
            <img src={flags.png} alt="" srcset="" />
            <div className="text-box" style={textStyle}>
                <h3>Country: {name.common}</h3>
                <h3>Official: {name.official}</h3>
            </div>

            {/* <h3>Email: {props.email}</h3>
        <h3>City: {props.city}</h3> */}
        </div>
        // method 1
        // <div className="person-box">
        //     <img src={props.img} alt="" srcset="" />
        //     <div className="text-box" style={textStyle}>
        //         <h3>Country: {props.country}</h3>
        //         <h3>Official: {props.official}</h3>
        //     </div>

        //     {/* <h3>Email: {props.email}</h3>
        //     <h3>City: {props.city}</h3> */}
        // </div>
    );
}
export default Country;