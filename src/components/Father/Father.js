import React from 'react';
import Myself from './../Myself/Myself';
import Brother from './../Brother.js/Brother';
import Sister from './../Sister/Sister';

const Father = (props) => {
    const { house, name } = props;
    return (
        <div>
            <h1>Father</h1>
            <h5>House {house}</h5>
            <div style={{ display: 'flex', }}>
                <Myself name={name} house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;