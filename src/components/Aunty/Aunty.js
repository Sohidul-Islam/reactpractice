import React from 'react';

const Aunty = (props) => {
    const { house } = props;
    return (
        <div>
            <h1>Aunty</h1>
            <h5>House {house}</h5>
        </div>
    );
};

export default Aunty;