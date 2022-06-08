import React from 'react';

const Fufu = (props) => {
    const { house } = props;
    return (
        <div>
            <h1>Fufu</h1>
            <h5>House {house}</h5>
        </div>
    );
};

export default Fufu;