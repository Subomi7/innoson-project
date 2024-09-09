import './App.css';
import Firstservice from './components/Firstservice';
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
      <Firstservice />
    </>
  );
}

export default App;
