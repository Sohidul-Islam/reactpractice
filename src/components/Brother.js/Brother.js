import React, { useContext } from 'react';
import { NameContext } from '../../App';

const Brother = () => {
    const [name, house] = useContext(NameContext);
    return (
        <div>
            <h1>Brother</h1>
            <h5>Name {name}</h5>
            <h5>House {house}</h5>
        </div>
    );
};

export default Brother;