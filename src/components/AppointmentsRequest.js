import { Link,Route, Routes, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Box from './Box';

function AppointmentsRequest() {
  return (
 
    
    <>
      

      <div className="wrapper d-grid gap-20">
        <Box topic="not-answered" />
        <Box topic="booked" />
        <Box topic="declined" />
        <Box topic="canceled" />
      </div>
    </>
  );
}

export default AppointmentsRequest;
