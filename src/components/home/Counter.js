import React from 'react'

const Counter = (props) => {
  return (
    <div>
      Counter: {props.number}
      <button onClick={() => props.increase()}>Increase</button>
      <button onClick={() => props.decrease()}>Decrease</button>
    </div>
  )
}

export default Counter
