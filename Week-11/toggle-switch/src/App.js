import './App.css';
import { store } from './redux/store';
import Room from './Components/Room';

function App() {
  return (
    <div className="App">
      <Room store={store}/>
    </div>
  );
}

export default App;
