import React, { useContext } from 'react';
import Myself from './../Myself/Myself';
import Brother from './../Brother.js/Brother';
import Sister from './../Sister/Sister';
import { NameContext } from '../../App';

const Father = () => {
    const [name, house] = useContext(NameContext);
    return (
        <div>
            <h1>Father</h1>
            <h5>House {house}</h5>
            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;