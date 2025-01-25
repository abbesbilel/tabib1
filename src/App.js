import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sign from './page/Sign'
import Signup from './page/SignUp';
import Personal from './page/Personal';
import Professional from './page/Professional';
import Practiceinformation from './page/Practiceinformation';
import Socialmedia from './page/Socialmedia';
import Avail from './page/Avail';
import Days from './page/Days';
import Mapa from './page/Mapa';
import Choice from './page/Choice';
import Appoin from './page/Appoin';
import Selection from './page/Selection';
import ForgotPass from './Forgot/ForgotPass'
import LandingPage from './Landing/LandingPage'
import Profile from "./Profile/components/Profile"
import Appointments from "./Profile/components/Appointments"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Personalinformations' element={<Personal />}></Route>
        <Route path='/Professionalinformation' element={<Professional />}></Route>
        <Route path='/Practiceinformation' element={<Practiceinformation />}></Route>
        <Route path='/socialmedia' element={<Socialmedia />}></Route>
        <Route path='/avail' element={<Avail />}></Route>
        <Route path='/days' element={<Days />}></Route>
        <Route path='/map' element={<Mapa />}></Route>
        <Route path='/choice' element={<Choice />}></Route>
        <Route path='/appoint' element={<Appoin />}></Route>
        <Route path='/selection' element={<Selection />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
