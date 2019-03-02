import React from 'react';
import './App.css';

import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const symbols = ['÷', '×', '-', '+', '='];

const App = () => {
  return (
    <div className="App">
        <CalculatorDisplay className="display" text='0'/>
        <div className="buttons">
            <div className="numbersAndClear">
                <ActionButton buttonStyle="longButton" text='clear'/>
                {numbers.map(number => <NumberButton key={number.toString()} buttonStyle='numberButton' text={number.toString()} />)}
                <NumberButton buttonStyle='numberButtonZero' text='0' />
            </div>
            <div className="symbolButtonSet">
                {symbols.map(symbol => <ActionButton key={symbol} buttonStyle='symbolButton' text={symbol} />)}
            </div>
        </div>
    </div>
  );
};

export default App;
