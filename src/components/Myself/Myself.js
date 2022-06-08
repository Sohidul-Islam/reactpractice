import React from 'react';

const Myself = (props) => {
    const { house, name } = props;
    return (
        <div>
            <h1>Myself</h1>
            <h5>Name: {name}</h5>
            <h5>House {house}</h5>
        </div>
    );
};

export default Myself;