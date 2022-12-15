import './App.css';
import Counter from './Components/counter';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Counter store={store} />
    </div>
  );
}

export default App;
