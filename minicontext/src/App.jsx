import './App.css'
import Profile from './Components\'/Profile'
import Login from './Components\'/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      
      <h1>Context API</h1>

      <Login/>
      <Profile/>
      
    </UserContextProvider>
  )
}

export default App
