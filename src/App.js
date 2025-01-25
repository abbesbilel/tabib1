import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Appointments from './components/Appointments';
import Settings from './components/Settings';
import SideBar from './components/SideBar';
import Head from './components/Head';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page d-flex">
          {/* Sidebar */}
          <SideBar />
          {/* Main Content */}
          <div className="content w-full">
            {/* Header */}
            <Head />
            {/* Routes */}
            <Routes>
              <Route
                path="/"
                element={<Wrapper />}
              />
              <Route path="appointments" element={<Appointments />} />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
