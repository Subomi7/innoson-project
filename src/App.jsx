import './App.css';
import FirstService from './components/FirstService';
import FourthService from './components/FourthService';
import Hero from './components/Hero';
import Motto from './components/Motto';
import SecondService from './components/SecondService';
import Services from './components/Services';
import ThirdService from './components/ThirdService';
import Navbar from './layout/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Motto />
      <Services />
      <FirstService />
      <SecondService />
      <ThirdService />
      <FourthService />
    </>
  );
}

export default App;
