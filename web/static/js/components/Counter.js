import React from 'react'
const Counter = ({counter, color, onIncrement, onDecrement, onColorToggle}) => (
    <div className={color} onClick={onColorToggle}>
        <h1>{counter}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)
export default Counter
