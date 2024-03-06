import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GameBoard({ gameCode }) {
  const [gameBoardData, setGameBoardData] = useState(null);

  useEffect(() => {
    const fetchGameBoardData = async () => {
      try {
        const response = await axios.get(`http://www.hyeumine.com/bingodashboard.php?bcode=${gameCode}`);
        console.log(response.data);
        setGameBoardData(response.data);
      } catch (error) {
        console.error('Error fetching game board data: ', error);
      }
    };

    fetchGameBoardData();
  }, [gameCode]);

  return (
    <div>
      <iframe
        title="Game Board"
        srcDoc={gameBoardData}
        style={{ width: '100%', height: '500px', border: 'none' }}
      />
  </div>
  );
}

export default GameBoard;
