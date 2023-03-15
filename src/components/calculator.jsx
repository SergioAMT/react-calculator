import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {

    const [displayValue, setDisplayValue] = useState(0);

    const handleButtonClick = (event) => {
        const buttonValue = event.target.value;

    if (buttonValue === "backspace") {
        setDisplayValue(0);
    } else if (buttonValue === "skip") {
        setDisplayValue(displayValue.slice(0, -1));
    } else if (buttonValue === "=") {
        try {
        setDisplayValue(evaluate(displayValue).toString());
        } catch (error) {
        setDisplayValue("Error");
        }
    } else {
        setDisplayValue(displayValue + buttonValue);
    }
    };

    const handleThemeToggle = () => {
      const calculator = document.querySelector(".calculator");
      calculator.classList.toggle("dark");
    };






    return (
        <div class="container">
        <div class="calculator dark">
            <div onClick={handleThemeToggle} class="theme-toggler active">
                <i class="toggler-icon"></i>
            </div>

            <div class="display-screen">
                <div id="display">
                    {displayValue}
                </div>
            </div>
            <div class="buttons">
                <table>
                    <tr>
                        <td><button onClick={handleButtonClick} value='backspace' class="btn-operator" id="clear">C</button></td>
                        <td><button onClick={handleButtonClick} value='/' class="btn-operator" id="divide">/</button></td>
                        <td><button onClick={handleButtonClick} value='*' class="btn-operator" id="multiply">*</button></td>
                        <td><button onClick={handleButtonClick} value='skip' class="btn-operator" id="backspace"> S </button></td>
                    </tr>
                    <tr>
                        <td><button onClick={handleButtonClick} value='7' class="btn-number" id="seven">7</button></td>
                        <td><button onClick={handleButtonClick} value='8' class="btn-number" id="eight">8</button></td>
                        <td><button onClick={handleButtonClick} value='9' class="btn-number" id="nine">9</button></td>
                        <td><button onClick={handleButtonClick} value='-' class="btn-operator" id="subtract">-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={handleButtonClick} value='4' class="btn-number" id="four">4</button></td>
                        <td><button onClick={handleButtonClick} value='5' class="btn-number" id="five">5</button></td>
                        <td><button onClick={handleButtonClick} value='6' class="btn-number" id="six">6</button></td>
                        <td><button onClick={handleButtonClick} value='+' class="btn-operator" id="add">+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={handleButtonClick} value='1' class="btn-number" id="one">1</button></td>
                        <td><button onClick={handleButtonClick} value='2' class="btn-number" id="two">2</button></td>
                        <td><button onClick={handleButtonClick} value='3' class="btn-number" id="three">3</button></td>
                        <td rowspan="2"><button onClick={handleButtonClick} value='=' class="btn-equal" id="equals">=</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={handleButtonClick} value='.' class="btn-operator" id="decimal">.</button></td>
                        <td><button onClick={handleButtonClick} value='0' class="btn-number" id="zero">0</button></td>
                        <td><button onClick={handleButtonClick} value='00' class="btn-number" id="00">00</button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    );
}

export default Calculator;
