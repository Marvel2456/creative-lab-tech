import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works"
import Serve from "./pages/Serve";

function App() {
  return (
    
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="works" element={<Works />} />
        <Route exact path="services" element={<Serve />} />
      </Routes>
  
    </div>
   
    
  );
}

export default App;
