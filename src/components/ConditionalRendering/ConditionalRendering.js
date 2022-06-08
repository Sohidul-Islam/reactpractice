import React from 'react';

const ConditionalRendering = (props) => {
    const { testing } = props;
    // let test;
    // if (testing) {
    //     test = <h1>the rendered value is {testing}</h1>;
    // }
    // else {
    //     test = <h1>the rendered value is undefined</h1>;
    // }
    return (
        <div>
            {testing && <h1>the rendered value is {testing}</h1>}
            <div>
                {testing || <h1>the rendered value is undefined</h1>}
            </div>

        </div>
    );
};

export default ConditionalRendering;