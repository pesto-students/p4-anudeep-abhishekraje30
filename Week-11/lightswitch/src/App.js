import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { flipLight } from './actions'
import "./App.css"

const App = () => {
  const { isLightOn } = useSelector(state => state)
  const dispatch = useDispatch()


  const lightedness = isLightOn ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={() => dispatch(flipLight())}>flip</button>
    </div>
  )
}

export default App