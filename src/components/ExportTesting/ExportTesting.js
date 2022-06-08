import React from 'react';
import { add, div, mul, sub } from './../Utilities/storage';

const ExportTesting = () => {
    const number1 = 50;
    const number2 = 30;

    const addition = add(number1, number2);
    const substraction = sub(number1, number2);
    const multiplication = mul(number1, number2);
    const division = div(number1, number2);
    return (
        <div>
            <h1>{number1 + " and " + number2 + " addition = " + addition}</h1>
            <h1>{number1 + " and " + number2 + " substraction = " + substraction}</h1>
            <h1>{number1 + " and " + number2 + " Muliplication = " + multiplication}</h1>
            <h1>{number1 + " and " + number2 + " Division = " + division}</h1>
        </div>
    );
};

export default ExportTesting;


