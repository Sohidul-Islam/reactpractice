import React, { useContext } from 'react';
import { NameContext } from '../../App';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Fufu from '../Fufu/Fufu';

const GrandFather = () => {

    const [name, house] = useContext(NameContext);
    return (
        <div>
            <h1>GrandFather</h1>
            <h5>Name {name}</h5>
            <h5>House {house}</h5>
            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                <Father house={house}></Father>
                <Fufu house={house}></Fufu>
                <Aunty house={house}></Aunty>
            </div>

        </div>
    );
};

export default GrandFather;