import './App.css';
import 'normalize.css';
import TopBar from './components/TopBar/TopBar';
import BotBar from './components/BotBar/BotBar';
import Footer from './components/Footer/Footer';
import GoTop from './components/GoTop/GoTop';
import NavBar from './components/NavBar/NavBar';
import React, {useState} from 'react';
import HeroSlider from './components/HeroSlider/HeroSlider';

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
        <NavBar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        <HeroSlider></HeroSlider>
        <Footer></Footer>
        <BotBar></BotBar>
        <GoTop></GoTop>
    </div>
  );
}

export default App;
