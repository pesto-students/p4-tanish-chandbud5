import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Shortner from './Components/Shortner';
import ReactGA from 'react-ga'

ReactGA.initialize('UA-250422090-2')
ReactGA.pageview(window.location.pathname);

// App to be rendered
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Shortner />
    </div>
  );
}

export default App;
