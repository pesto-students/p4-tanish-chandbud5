import '../CSS/App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import Shortner from './Shortner';

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
