import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submit = e => {
    e.preventDefault();
    Meteor.call('user.create', {
      username: username,
      password: password,
      email: email,
      displayName: displayName
    }, (err, res) => {
      if (err) {
        alert(err);
      } else {
        console.log(res)
        Meteor.loginWithPassword(username, password);
      }
    });
  };

  return (
    <form onSubmit={submit} className="login-form">
      <label htmlFor="username">Username</label>

      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={e => setUsername(e.target.value)}
      />

      <label htmlFor="username">Display Name</label>

      <input
        type="text"
        placeholder="Display Name"
        name="displayName"
        required
        onChange={e => setDisplayName(e.target.value)}
      />

      <label htmlFor="email">Email</label>

      <input
        type="email"
        placeholder="Email"
        name="email"
        required
        onChange={e => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>

      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">Sign Up</button>
    </form>
  );
};