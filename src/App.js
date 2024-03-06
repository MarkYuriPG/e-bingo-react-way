import './App.css';
import GameBoard from './GameBoard';  
import Card from './Card';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lobby from './Lobby';
import { Button } from '@mui/material';
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
