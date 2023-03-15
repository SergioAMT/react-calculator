import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {

    // const [displayValue, setDisplayValue] = useState(0);

    // const handleButtonClick = (event) => {
    //     const buttonValue = event.target.value;

    // if (buttonValue === "backspace") {
    //     setDisplayValue(0);
    // } else if (buttonValue === "skip") {
    //     setDisplayValue(displayValue.slice(0, -1));
    // } else if (buttonValue === "=") {
    //     try {
    //     setDisplayValue(evaluate(displayValue).toString());
    //     } catch (error) {
    //     setDisplayValue("Error");
    //     }
    // } else {
    //     setDisplayValue(displayValue + buttonValue);
    // }
    // };

    const handleThemeToggle = () => {
      const calculator = document.querySelector(".calculator");
      calculator.classList.toggle("dark");
    };


    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState('');
    const [formula, setFormula] = useState('');
    const [evaluated, setEvaluated] = useState(false);
  
    const handleNumberClick = (e) => {
      const value = e.target.value;
      if (currentValue === '0' && value === '0') {
        return;
      }
      if (currentValue === '0' && value !== '0') {
        setCurrentValue(value);
        setFormula(formula + value);
        return;
      }
      if (evaluated) {
        setCurrentValue(value);
        setFormula(value);
        setEvaluated(false);
        return;
      }
      setCurrentValue(currentValue + value);
      setFormula(formula + value);
    };
  
    const handleOperatorClick = (e) => {
      const operator = e.target.value;
      if (evaluated) {
        setPreviousValue(currentValue + operator);
        setFormula(currentValue + operator);
        setEvaluated(false);
        return;
      }
      if (previousValue === '') {
        setPreviousValue(currentValue + operator);
        setFormula(formula + operator);
        setCurrentValue('0');
        return;
      }
      const result = evaluate(previousValue + currentValue);
      setPreviousValue(result + operator);
      setCurrentValue(result.toString());
      setFormula(result + operator);
    };
  
    const handleDecimalClick = () => {
      if (currentValue.includes('.')) {
        return;
      }
      setCurrentValue(currentValue + '.');
      setFormula(formula + '.');
    };
  
    const handleClearClick = () => {
      setCurrentValue('0');
      setPreviousValue('');
      setFormula('');
      setEvaluated(false);
    };
  
    const handleEqualClick = () => {
      if (previousValue === '') {
        return;
      }
      if (evaluated) {
        setPreviousValue(currentValue);
        setFormula(currentValue);
        return;
      }
      const result = evaluate(previousValue + currentValue);
      setCurrentValue(result.toString());
      setPreviousValue('');
      setFormula(formula + '=' + result);
      setEvaluated(true);
    };



    return (
        <div class="container">
        <div class="calculator dark">
            <div onClick={handleThemeToggle} class="theme-toggler active">
                <i class="toggler-icon"></i>
            </div>

            <div class="display-screen">
                <div id="display">
                    {/* {displayValue} */}
                    {currentValue}
                </div>
            </div>
            <div class="buttons">
                <table>
                    <tr>
                        <td><button onClick={handleClearClick} value='backspace' class="btn-operator" id="clear">C</button></td>
                        <td><button onClick={handleOperatorClick} value='/' class="btn-operator" id="divide">/</button></td>
                        <td><button onClick={handleOperatorClick} value='*' class="btn-operator" id="multiply">*</button></td>
                        {/* <td><button onClick={handleButtonClick} value='skip' class="btn-operator" id="backspace"> S </button></td> */}
                    </tr>
                    <tr>
                        <td><button onClick={handleNumberClick} value='7' class="btn-number" id="seven">7</button></td>
                        <td><button onClick={handleNumberClick} value='8' class="btn-number" id="eight">8</button></td>
                        <td><button onClick={handleNumberClick} value='9' class="btn-number" id="nine">9</button></td>
                        <td><button onClick={handleOperatorClick} value='-' class="btn-operator" id="subtract">-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={handleNumberClick} value='4' class="btn-number" id="four">4</button></td>
                        <td><button onClick={handleNumberClick} value='5' class="btn-number" id="five">5</button></td>
                        <td><button onClick={handleNumberClick} value='6' class="btn-number" id="six">6</button></td>
                        <td><button onClick={handleOperatorClick} value='+' class="btn-operator" id="add">+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={handleNumberClick} value='1' class="btn-number" id="one">1</button></td>
                        <td><button onClick={handleNumberClick} value='2' class="btn-number" id="two">2</button></td>
                        <td><button onClick={handleNumberClick} value='3' class="btn-number" id="three">3</button></td>
                        <td rowspan="2"><button onClick={handleEqualClick} value='=' class="btn-equal" id="equals">=</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={handleDecimalClick} value='.' class="btn-operator" id="decimal">.</button></td>
                        <td><button onClick={handleNumberClick} value='0' class="btn-number" id="zero">0</button></td>
                        <td><button onClick={handleNumberClick} value='00' class="btn-number" id="00">00</button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    );
}

export default Calculator;
