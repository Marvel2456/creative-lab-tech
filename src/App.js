import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works"

function App() {
  return (
    
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='works' element={<Works />} />
      </Routes>
      
    </div>
   
    
  );
}

export default App;
