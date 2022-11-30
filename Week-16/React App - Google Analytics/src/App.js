import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Shortner from './Components/Shortner';
import ReactGA from 'react-ga';
import {useEffect} from 'react';

// App to be rendered
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Shortner />
    </div>
  );
}

export default App;
