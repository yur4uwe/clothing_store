import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [display, setDisplay] = useState("");

    /**
     * @param {string} value 
     */
    const handleClick = (value) => {
        if (value === "=") {
            try {
                const result = eval(display);
                setDisplay(result.toString());
            } catch (error) {
                setDisplay("Error");
            }
        } else if (value === "C") {
            setDisplay("");
        } else {
            setDisplay(prev => prev + value);
        }
    };

    return (
        <div className="calculator">
            <div className="display">{display || "0"}</div>
            <div className="buttons">
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("/")}>/</button>
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick("*")}>*</button>
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("-")}>-</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick(".")}>.</button>
                <button onClick={() => handleClick("C")}>C</button>
                <button onClick={() => handleClick("+")}>+</button>
                <button className="equal" onClick={() => handleClick("=")}>=</button>
            </div>
        </div>
    );
};

export default Calculator;