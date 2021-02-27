import React, { useState } from 'react'
import { celsiusToFahrenheit, fahrenheitToCelsius } from '../utils/formula'
import './Controls.css'

const Controls = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(0)
  const [conversion, setConversion] = useState('fahrenheitToCelsius')

  const handleClick = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent> ): void => {
    const btn = e.currentTarget.textContent
    switch(btn) {
      case 'go':
        setResult(conversion==='fahrenheitToCelsius'?fahrenheitToCelsius(Number(input)): celsiusToFahrenheit(Number(input)))
        break;
      case '<':
        setInput(input.slice(0,-1))
        break;
      case '+/-':
        setInput(input[0] === '-' ? input.slice(1) : '-'+input)
        break;
      case 'clr':
        setInput('')
        break;
      default :
        setInput(input+btn)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    setConversion(e.target.value)
  }

  return (
    <>
      <div>
        <select onChange={handleChange} value={conversion}>
          <option value="fahrenheitToCelsius">F&gt;C</option>
          <option value="celsiusToFahrenheit">C&lt;F</option>
        </select>
      </div>
      <div>
          <h1>{input || '0'}</h1>
          <div className="keypad">
          <div onClick={handleClick}>1</div>
          <div onClick={handleClick}>2</div>
          <div onClick={handleClick}>3</div>
          <div onClick={handleClick}>4</div>
          <div onClick={handleClick}>5</div>
          <div onClick={handleClick}>6</div>
          <div onClick={handleClick}>7</div>
          <div onClick={handleClick}>8</div>
          <div onClick={handleClick}>9</div>
          <div onClick={handleClick}>+/-</div>
          <div onClick={handleClick}>0</div>
          <div onClick={handleClick}>.</div>
          <div onClick={handleClick}>&lt;</div>
          <div onClick={handleClick}>clr</div>
          <div onClick={handleClick}>go</div>
        </div>
        
        <h1>{result}</h1>
      </div>
    </>
  )
}

export default Controls
