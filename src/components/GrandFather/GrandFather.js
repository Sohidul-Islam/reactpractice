import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Fufu from '../Fufu/Fufu';

const GrandFather = () => {
    return (
        <div>
            <h1>GrandFather</h1>
            <div style={{ display: 'flex' }}>
                <Father></Father>
                <Fufu></Fufu>
                <Aunty></Aunty>
            </div>

        </div>
    );
};

export default GrandFather;