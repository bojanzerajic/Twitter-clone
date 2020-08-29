import React, { useState } from 'react';
import style from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const url =
    'https://twitter-clone-server-seven.vercel.app/api/v1/users/login';

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    const payload = {
      email,
      password,
    };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('token', JSON.stringify(data.token));
      })
      .catch((err) => setError('Invalid email or password'));
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError('');
  };

  return (
    <div className={style.container}>
      <img
        src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"
        alt="twitter icon"
      />
      <h4 className={style.h4}>Log in to Twitter</h4>
      <form onSubmit={handleSubmit} className={style.wrapper}>
        <div className={style.inputWrapper}>
          <label htmlFor="email" className={style.label}>
            Email
          </label>
          <input
            onChange={handleEmailChange}
            value={email}
            id="email"
            className={style.input}
            type="email"
          />
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="password" className={style.label}>
            Password
          </label>
          <input
            onChange={handlePasswordChange}
            value={password}
            id="password"
            className={style.input}
            type="password"
          />
        </div>
        <button type="submit" className={style.button}>
          Log in
        </button>
      </form>
      <div id="error" className={style.errorSection}>
        {error}
      </div>
    </div>
  );
};

export { Login };
