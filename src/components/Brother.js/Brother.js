import React from 'react';

const Brother = (props) => {
    const { house } = props;
    return (
        <div>
            <h1>Brother</h1>
            <h5>House {house}</h5>
        </div>
    );
};

export default Brother;