import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sign from './page/LoginSignIn/Sign'
import Signup from './page/SignUp/SignUp';
import Personal from './page/Personal/Personal';
import Professional from './page/Professional/Professional';
import Practiceinformation from './page/Practiceinformation/Practiceinformation';
import Socialmedia from './page/SocialMedia/Socialmedia';
import Avail from './page/Avail/Avail';
import Days from './page/Days/Days';
import Mapa from './page/Map/Mapa';
import Choice from './page/Choise/Choice';
import Appoin from './page/Appoint/Appoin';
import Selection from './page/Selection/Selection';
import ForgotPass from './Forgot/ForgotPass'
import LandingPage from './Landing/LandingPage'
import Profile from "./Profile/components/Profile"
import Appointments from "./Profile/components/Appointments"
import Page from './page/DoctorOverview/Page';
import Page2 from './page/DoctorAppointments/Page2'
import Page3 from './page/DoctorSettings/Page3'

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
        <Route
          path="/page"
          element={
            <>
              <Page />
            </>
          }
        />

        {/* Appointments Route */}
        <Route path="/Page2" element={<Page2 />} />

        {/* Settings Route */}
        <Route path="/Page3" element={<Page3 />} />

        {/* Wrapper Route */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
