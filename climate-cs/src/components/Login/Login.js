import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Button from '@material-ui/core/Button';

async function loginUser(credentials) {
 return fetch('http://localhost:1000/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      password
    });
    setToken(token);
  }

  return(
    <div className="App-header">
      <h1>Пожалуйста, войдите в систему!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Пароль:</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
        <Button variant="contained" disableElevation type="submit">
            Авторизоваться
        </Button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};