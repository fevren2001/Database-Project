import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Characters from './pages/Characters';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/Characters" exact element={<Characters />}/>
          <Route path="/About" exact element={<About />}/>
          <Route path="/Contact" exact element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
