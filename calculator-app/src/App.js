import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [notes, setNotes] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.name);
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      const calculation = `${input} = ${eval(input)}`;
      setResult(eval(input).toString());
      setHistory([...history, calculation]);
    } catch (err) {
      setResult('Error');
    }
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  return (
    <div className="container">
      {/* Left Panel - Notes */}
      <div className="panel notes-panel">
        <h2>Notes</h2>
        <textarea
          value={notes}
          onChange={handleNotesChange}
          placeholder="Write your notes here..."
        />
      </div>

      {/* Center Panel - Calculator */}
      <div className="calculator">
        <h1 className="heading">Blue Calculator</h1>
        <input type="text" value={input} readOnly />
        <input type="text" value={result} readOnly />
        <div className="keypad">
          <button onClick={clear} id="clear">Clear</button>
          <button onClick={backspace} id="backspace">C</button>
          <button name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick}>+</button>
          <button name="#" onClick={handleClick}>#</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button onClick={calculate} id="result">=</button>
        </div>
      </div>

      {/* Right Panel - History */}
      <div className="panel history-panel">
        <h2>History</h2>
        <ul>
          {history.map((calculation, index) => (
            <li key={index}>{calculation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
