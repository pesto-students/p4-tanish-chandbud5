import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Shortner from './Components/Shortner';

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
