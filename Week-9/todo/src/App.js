import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import TaskManager from './Components/AddTodo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TaskManager />
    </div>
  );
}

export default App;
