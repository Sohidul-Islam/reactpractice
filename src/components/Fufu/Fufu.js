import React, { useContext } from 'react';
import { NameContext } from '../../App';

const Fufu = () => {
    const [name, house] = useContext(NameContext);
    return (
        <div>
            <h1>Fufu</h1>
            <h5>Name {name}</h5>
            <h5>House {house}</h5>
        </div>
    );
};

export default Fufu;