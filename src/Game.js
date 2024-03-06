import React,{useEffect, useState} from 'react';
import {Button} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import Card from './Card';


function Game(){
    const { gameCode } = useParams();
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    const handleAddCard = () => {
        setCards([...cards, { id: cards.length + 1 }]);
    }

    const handleBackToLobby = () => {
        navigate('/');
    }

    return(
        <div className='game'>  
            <h1>Game Code: {gameCode}</h1>
            <Button className='Add-card' 
        variant="contained" 
        color="primary" 
        onClick={handleAddCard}
        style={{ margin: '10px' , width: '150px'}}>
        ADD CARD
      </Button>
      <Button
                className='Back-to-lobby'
                variant="contained"
                color="primary"
                onClick={handleBackToLobby}
                style={{ margin: '10px' , width: '150px', backgroundColor: 'gray', color: 'white' }}
            >
                BACK TO LOBBY
            </Button>
        <div className='CARDS'>
            {cards.map((card, index) => (
                <div key={index} className='CARD'>
                    <p style={{marginTop: '0', fontSize:'18px', fontStyle:'bold'}}>CARD {index + 1}</p>
                    <Card gameCode={gameCode} className='card' />
                </div>
            ))}
        </div>
      </div>
    );
}

export default Game;
