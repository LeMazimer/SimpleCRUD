import React, {useState} from 'react';
import './App.css';
import Login from './components/Login'
import Addresses from './components/Addresses'

function App() {
  const [token, setToken] = useState('')

  const userLogin = (passedToken) => {
    // console.log("Passed token: ", passedToken)
    setToken(passedToken)
    console.log("Saved token: ", token)
  }

  return (
    <div className="app">
      <Login userLogin={userLogin}/>
      <Addresses token={token}/>
    </div>
  );
}

export default App;
