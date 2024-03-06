import React, { useEffect, useState } from 'react';
import {Button} from '@mui/material';
import axios from 'axios';

function Card({ gameCode }) {
  const [cardData, setCardData] = useState(null);
  const [isWinner, setIsWinner] = useState(false);
  const [checkWinClicked, setCheckWinClicked] = useState(false);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get(`http://www.hyeumine.com/getcard.php?bcode=${gameCode}`);
        setCardData(response.data);
      } catch (error) {
        console.error('Error fetching card data: ', error);
      }
    };

    fetchCardData();
  }, [gameCode]);
  const checkWin = async (playcardToken) => {
    try {
      const response = await axios.get(`http://www.hyeumine.com/checkwin.php?playcard_token=${playcardToken}`);
      setIsWinner(response.data === 1);
    } catch (error) {
      console.error('Error checking win: ', error);
    }
    
    setCheckWinClicked(true);
  };

  return (
    <div>
      {cardData && (
        <div>
          <table className={`bingo-card ${isWinner ? 'winner' : ''}`}>
            <thead>
              <tr>
                <th>B</th>
                <th>I</th>  
                <th>N</th>
                <th>G</th>
                <th>O</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(cardData.card).map(([letter, numbers]) => (
                <tr key={letter}>
                  {numbers.map((number, index) => (
                    <td key={index} className={`bingo-number-box ${isWinner? 'winning-number' : ''}`}>
                      {number}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <Button onClick={() => checkWin(cardData.playcard_token)} 
          variant="contained" 
          color="primary" 
          style={{marginLeft:'30%', height: '25px'}}>Check Win</Button>
          {checkWinClicked && !isWinner && (
            <div style={{padding: '20px', textAlign: 'center'}}>Sorry! You did not win this time.</div>
          )}
          {isWinner && (
            <div style={{padding: '20px', textAlign: 'center'}}>Congratulations! You won!</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
