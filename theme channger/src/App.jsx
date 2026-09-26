import { useState } from 'react'
import ChangeTheme from './changeTheme'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ChangeTheme/>
    </>
  )
}

export default App
