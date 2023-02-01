import { useState } from 'react'
import './App.css'
import Clicker from './components/clicker/clicker'
import SimpleForm from './components/simpleForm/simpleForm'
import Toggles from './components/toggles/toggles'
import BigForm from './components/bigForm/bigForm'
import CounterPage from './pages/CounterPage'


function App() {
  // const [count, setCount] = useState(0)

  // const handleClick = () => {
  //   setCount(curr => curr + 1)
  //   setCount(curr => curr + 1)
  //   setCount(curr => curr + 1)
  // }

  // const handleClick = (e) => {
  //   setCount(e.target.value)
  // } 

  return (
    <div className="App">
        <CounterPage />
        {/* <BigForm /> */}
        {/* <Toggles /> */}
        {/* {count}
        <Clicker handleClick={handleClick} /> */}
        {/* <span>{count}</span>
        <button onClick={handleClick}>+</button> */}
      </div>

  )
}

export default App
