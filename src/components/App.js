import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/about" element ={<About />} />
          <Route path="/contact" element ={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
