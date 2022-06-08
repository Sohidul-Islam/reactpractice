import React, { useContext } from 'react';
import { NameContext } from '../../App';

const Aunty = () => {
    const [name, house] = useContext(NameContext);
    return (
        <div>
            <h1>Aunty</h1>
            <h4>Name {name}</h4>
            <h5>House {house}</h5>
        </div>
    );
};

export default Aunty;