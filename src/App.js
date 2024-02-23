import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fixtures from "./fixtures";
import Exercises from "./Exercises";
import Health from './health';
import Nav from './nav'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Fixtures />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path='/health' element={<Health />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
