import './App.css';
import FirstService from './components/FirstService';
import FourthService from './components/FourthService';
import Hero from './components/Hero';
import Motto from './components/Motto';
import SecondService from './components/SecondService';
import Services from './components/Services';
import ThirdService from './components/ThirdService';
import Vision from './components/Vision';
import Footer from './layout/Footer';
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
      <Vision />
      <Footer />
    </>
  );
}

export default App;
