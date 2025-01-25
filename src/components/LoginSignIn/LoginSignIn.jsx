import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './LoginSignIn.css';
import facebook from '../assets/Facebook.png';
import google from '../assets/google.png';
import tabib from '../assets/tabib.png';

const LoginSignIn = () => {
  // États pour les champs d'entrée
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Gestion de la soumission
  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    console.log('Login submitted with:', { email, password });
    // Ajoutez ici votre logique d'authentification
  };

  return (
    <div className='container'>
      <div className='header2'>
        <div className='signin'>
          <h1>Sign in to <span>DZ</span>TABIB</h1>
        </div>
        <div className='register'>
          If you don't have an account<br />You can <Link to="/Signup"><span>Register here!</span></Link>
        </div>
        <div className='photo'>
          <img className='phototabib' src={tabib} alt="tabib" />
        </div>
      </div>
      <div className='container2'>
        <div className='header'>
          <div className='text'> <h2>Sign In</h2></div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {error && <div className="error-message">{error}</div>}
          <div className='input'>
            <input
              className='input1'
              type="email"
              placeholder='enter email or username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input'>
            <input
              className='input2'
              type="password"
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='forgetpass'><p>Forgot Password ?</p></div>
          <div className='submit-container'>
            <div className='submit' onClick={handleLogin}>Login</div>
          </div>
          <div className="signup">
            You don't have an account! <span><Link to="/choice">Sign Up</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignIn;
