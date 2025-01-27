import {
    Appoint,
    Avail,
    Choise,
    Days,
    DoctorAppointments,
    DoctorOverview,
    DoctorSettings,
    ForgotPassword,
    Landing,
    LoginSignIn,
    Map,
    Personal,
    Practiceinformation,
    Professional,
    Profile,
    ResetPassword,
    Selection,
    SignUp,
    SocialMedia,
    Success,
    VerifyCode,
    Appointments,
    AdminOverview,
    AdminPatient
} from '../page/index';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<LoginSignIn />}></Route>
                    <Route path='/Signup' element={<SignUp />}></Route>
                    <Route path='/Personalinformations' element={<Personal />}></Route>
                    <Route path='/Professionalinformation' element={<Professional />}></Route>
                    <Route path='/Practiceinformation' element={<Practiceinformation />}></Route>
                    <Route path='/socialmedia' element={<SocialMedia />}></Route>
                    <Route path='/avail' element={<Avail />}></Route>
                    <Route path='/days' element={<Days />}></Route>
                    <Route path='/map' element={<Map />}></Route>
                    <Route path='/choice' element={<Choise />}></Route>
                    <Route path='/appoint' element={<Appoint />}></Route>
                    <Route path='/selection' element={<Selection />}></Route>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/landingpage" element={<Landing />} />
                    <Route path="/ForgotPassword" element={<ForgotPassword />} />
                    <Route path="/ResetPassword" element={<ResetPassword />} />
                    <Route path="/Success" element={<Success />} />
                    <Route path="/VerifyCode" element={<VerifyCode />} />
                    <Route path="/page" element={<DoctorOverview />} />
                    <Route path="/Page2" element={<DoctorAppointments />} />
                    <Route path="/Page3" element={<DoctorSettings />} />
                    <Route path="/Page4" element={<AdminOverview />} />
                    <Route path="/Page5" element={<AdminPatient />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Routers;