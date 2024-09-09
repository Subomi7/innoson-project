import './App.css';
import FirstService from './components/FirstService';
import Hero from './components/Hero';
import Motto from './components/Motto';
import Services from './components/Services';
import Navbar from './layout/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Motto />
      <Services />
      <FirstService />
    </>
  );
}

export default App;
