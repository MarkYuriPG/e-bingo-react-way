import React from "react";
import {TextField, Button} from '@mui/material';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Lobby(){
  const [gameCode, setGameCode] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleJoinGame = (event) => {
    event.preventDefault();
    if (gameCode.trim() !== '') {
        navigate(`/Game/${gameCode}`);
    } else {
        setError('Please enter a valid game code.');
    }
  };

  const handleGameCodeChange = (event) => {
    setGameCode(event.target.value);
    setError('');
};

    return (
        <div className="Lobby">
            <TextField
                id="outlined-basic"
                label="Game Code"
                variant="outlined"
                value={gameCode}
                onChange={handleGameCodeChange}
                error={Boolean(error)}
                helperText={error}
            />
            <div><Button className='Join-button' 
            variant="contained" 
            color="primary" 
            style={{ margin: '10px' }}
            onClick={handleJoinGame}>JOIN GAME</Button></div>
        </div>
    );
}

export default Lobby;