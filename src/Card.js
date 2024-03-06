import React, { useEffect, useState } from 'react';
import {Button} from '@mui/material';
import axios from 'axios';

function Card({ gameCode }) {
  const [cardData, setCardData] = useState(null);

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
      if (response.data === 1) {
        console.log(`Congratulations ${playcardToken}! You won!`);
      } else {
        console.log(`Sorry ${playcardToken}! You did not win.`);
      }
    } catch (error) {
      console.error('Error checking win: ', error);
    }
  };

  return (
    <div>
      {cardData && (
        <div>
          <table className="bingo-card">
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
                    <td key={index} className="bingo-number-box">{number}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <Button onClick={() => checkWin(cardData.playcard_token)} 
          variant="contained" 
          color="primary" 
          style={{marginLeft:'30%', height: '25px'}}>Check Win</Button>
        </div>
      )}
    </div>
  );
}

export default Card;
