import React from 'react';
import Myself from './../Myself/Myself';
import Brother from './../Brother.js/Brother';
import Sister from './../Sister/Sister';

const Father = () => {
    return (
        <div>
            <h1>Father</h1>
            <div style={{ display: 'flex', }}>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;