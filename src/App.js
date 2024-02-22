import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fixtures from "./fixtures";
import Exercises from "./Exercises";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fixtures />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
