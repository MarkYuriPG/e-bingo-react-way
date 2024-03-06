import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lobby from './Lobby';
import Game from './Game';

function App() {

  return (
    <div className='game'>
      <Router>
        <Routes>
          <Route path='/' element={<Lobby />} />
          <Route path="/Game/:gameCode" element={<Game />} />
        </Routes>
      </Router>
    
    </div>  
  );
}

export default App;
