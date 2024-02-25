import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fixtures from "./fixtures";
import Exercises from "./Exercises";
import Nav from './nav';
import Health from './health';
import Diet from './diett';
import BreadCrumbs from './breadCrumbs';

const App = () => {
  

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Fixtures/>} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path='/health' element={ <Health />} />
          <Route path='/diet' element={<Diet />} />
         
        </Routes>
        <BreadCrumbs />
      </BrowserRouter>
   
    </div>
  );
};



export default App;

