import React, { useState } from 'react';
import Box from './Box';

function AppointmentsRdv() {


  return (
    <>
       <div className="wrapper d-grid gap-20">
        <Box topic="Clinic-Consultation" />
        <Box topic="Done" />
      </div>

    </>
  );
}

export default AppointmentsRdv;