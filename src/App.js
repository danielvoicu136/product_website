import './App.css';
import 'normalize.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from './components/TopBar/TopBar';
import BotBar from './components/BotBar/BotBar';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import React, {useState} from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import BackToTop from './components/BackToTop/BackToTop';


function App() {

  const [isMenuOpen, setMenu] = useState(false);

  const toggleMenu = () => { 
    setMenu((isMenuOpen) => !isMenuOpen);
  }

  const closeMenu = () => { 
    setMenu(false);
  }

  return (
    <div className="App">



        <TopBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    
        <Router>
            <NavBar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
        <Footer></Footer>
        <BotBar></BotBar>
        <BackToTop></BackToTop>
    </div>
  );
}

export default App;
