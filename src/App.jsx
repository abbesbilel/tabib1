import React from 'react';
import ForgotPass from './Forgot/ForgotPass'
import LandingPage from './Landing/LandingPage'
import Profile from "./Profile/components/Profile"
import Appointments from "./Profile/components/Appointments"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
