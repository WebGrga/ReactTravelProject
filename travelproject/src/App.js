import React, { useState } from 'react';
import './App.css';
import HomeSec from './components/HomeSec';
import TodoList from './components/TodoList';
import Showcase from './components/Showcase';
import logo from './images/logoTravel.png';
import user from './images/Male User.png';
import way from './images/Love Path.png';
import check from './images/Check All.png';
import PreviousTravel from './components/PreviousTravel';
import Profile from './components/Profile';

function App() {
  const [showTodoList, setShowTodoList] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showPreviousTravel, setShowPreviousTravel] = useState(false);

  // Function to handle profile button click
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
    setShowPreviousTravel(false);
    setShowTodoList(false);
  };

  // Function to handle previous travel button click
  const handlePreviousTravelClick = () => {
    setShowPreviousTravel(!showPreviousTravel);
    setShowProfile(false);
    setShowTodoList(false);
  };

  // Function to handle to-do list button click
  const handleTodoListClick = () => {
    setShowTodoList(!showTodoList);
    setShowProfile(false);
    setShowPreviousTravel(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='Logo'></img>
      </header>
      <HomeSec />
      <Showcase />
      <TodoList isVisible={showTodoList} />
      <PreviousTravel isVisible={showPreviousTravel} />
      <Profile isVisible={showProfile} />
      <footer>
        <button onClick={handleProfileClick}><img src={user} alt='user'></img></button>
        <button onClick={handlePreviousTravelClick}><img src={way} alt='way'></img></button>
        <button onClick={handleTodoListClick}><img src={check} alt='check'></img></button>
      </footer>
    </div>
  );
}

export default App;
