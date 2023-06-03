import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [usernameReg, setUsername] = useState('');
  const [passwordReg, setPassword] = useState('');
  const [username, logUsername] = useState('');
  const [password, logPassword] = useState('');

  const Login = () => {
    Axios.get('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
    console.log(username + password);
  };

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
    console.log(usernameReg + passwordReg);
  };

  return (
    <div className="App">
      <div className="login">
        <h1>Login</h1>
        <label>Username</label>
        <input
        onChange={(e) => {
          logUsername(e.target.value);
        }}
          type="text"
          placeholder="Username"
        />
        <label>Password</label>
        <input
        onChange={(e) => {
          logPassword(e.target.value);
        }}
          type="password"
          placeholder="Password"
        />
        <button onClick={Login}>Login</button>
      </div>
      <div className="register">
        <h1>Register</h1>
        <label>Username</label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Username"
        />
        <label>Password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default App;