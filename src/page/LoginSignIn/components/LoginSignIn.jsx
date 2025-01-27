import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './LoginSignIn.css';
import tabib from '../../../assets/tabib.png';
import axios from 'axios';

const LoginSignIn = () => {
  // États pour les champs d'entrée
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Gestion de la soumission
  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    setError('');


    if (email === 'admin' && password === 'admin') {
      // Special case for admin credentials: redirect to /page4
      console.log('Admin login detected. Redirecting to /page4');
      window.location.href = '/page4';
      return; 
    } else {

      try {
        const response = await axios.post('http://localhost:5000/auth/login', {
          email,
          password,
        });
  
        if (response.status === 200) {
          // Login successful
          const { accessToken } = response.data;
          console.log('Login successful. Access Token:', accessToken);
  
          // Save the access token to localStorage or context
          localStorage.setItem('accessToken', accessToken);
  
          // Redirect to the landing page or dashboard
          window.location.href = '/landingpage';
        }
      } catch (error) {
        if (error.response) {
          // Handle errors from the backend
          setError(error.response.data.msg || 'Login failed. Please try again.');
        } else {
          // Handle network errors
          setError('An error occurred. Please check your connection and try again.');
        }
        console.error('Error during login:', error);
      } finally {
        setIsLoading(false);
      }
    };


    }


  return (
    <div className='containerr'>
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
          <div className='text'> <h2>Login</h2></div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {error && <div className="error-message">{error}</div>}
          <div className='input'>
            <input
              className='input1'
              type="email"
              placeholder='Enter email or username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input'>
            <input
              className='input2'
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/ForgotPassword">
            <div className='forgetpass'><p>Forgot Password ?</p></div>
          </Link>
          <div className='submit-container'>
            <button className='submit' onClick={handleLogin} disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
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