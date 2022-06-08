import React from 'react';

const Sister = (props) => {
    const { house } = props;
    return (
        <div>
            <h1>Sister</h1>
            <h5>House {house}</h5>
        </div>
    );
};

export default Sister;