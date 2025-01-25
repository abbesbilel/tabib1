import Head from "./Head";
import Wrapper from "./Wrapper";
import { Routes, Route } from "react-router-dom";

import Appointments from "./Appointments";
import Settings from "./Settings";


import AppointmentsRdv from "./AppointmentsRdv";
import AppointmentsRequest from "./AppointmentsRequest";

function Content() {
  return (
    <>
    <div className="content w-full">

      {/*  Start Head  */}
      <Head />
      {/* End Head */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Wrapper />
              
            </>
          }
        />
         <Route path="appointments" element={<Appointments />}/>
         {/* <Route path="rdv" element={<AppointmentsRdv />}/> */}
         <Route path="settings" element={<Settings />} />
      </Routes>


    </div>
    </>
  );
}

export default Content;
