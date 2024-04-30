import React, { useState } from 'react';
import './App.css';
import HomeSec from './components/HomeSec';
import TodoList from './components/TodoList';

function App() {
  const [showTodoList, setShowTodoList] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src='https://cdn.discordapp.com/attachments/1106876170911358987/1234610246811389982/logoTravel.png' alt='Logo'></img>
      </header>
      <HomeSec />
      <TodoList isVisible={showTodoList} />
      <footer>
        <button>Profile</button>
        <button>Way</button>
        <button onClick={() => setShowTodoList(!showTodoList)}>To Do</button>
      </footer>
    </div>
  );
}

export default App;
