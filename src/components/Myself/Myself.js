import React, { useContext } from 'react';
import { NameContext } from '../../App';

const Myself = (props) => {
    const { house } = props;
    const name = useContext(NameContext);
    console.log(name);
    return (
        <div>
            <h1>Myself</h1>
            <h5>Name: {name}</h5>
            <h5>House {house}</h5>
        </div>
    );
};

export default Myself;