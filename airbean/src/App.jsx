import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { increase, decrease } from './actions/counterActions'
import { ViewCounter } from './viewCounter/viewCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

    </div>
  )
}

export default App
