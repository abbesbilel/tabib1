import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import Appointments from './components/Appointments';
import Settings from './components/Settings';
import Wrapper from './components/Wrapper';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Main Page Route */}
          <Route
            path="/"
            element={
              <>
                <Page />
              </>
            }
          />

          {/* Appointments Route */}
          <Route path="/appointments" element={<Appointments />} />

          {/* Settings Route */}
          <Route path="/settings" element={<Settings />} />

          {/* Wrapper Route */}
          <Route
            path="/wrapper"
            element={
              <>
                <Wrapper />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;