import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Fufu from '../Fufu/Fufu';

const GrandFather = (props) => {
    const { house } = props;
    return (
        <div>
            <h1>GrandFather</h1>
            <h5>House {house}</h5>
            <div style={{ display: 'flex' }}>
                <Father house={house}></Father>
                <Fufu house={house}></Fufu>
                <Aunty house={house}></Aunty>
            </div>

        </div>
    );
};

export default GrandFather;