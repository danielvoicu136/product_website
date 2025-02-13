import './App.css';
import 'normalize.css';
import TopBar from './components/TopBar/TopBar';
import BotBar from './components/BotBar/BotBar';
import Footer from './components/Footer/Footer';
import GoTop from './components/GoTop/GoTop';

function App() {
  return (
    <div className="App">
        <TopBar></TopBar>



        <Footer></Footer>
        <BotBar></BotBar>
        <GoTop></GoTop>
    </div>
  );
}

export default App;
