import Board from './components/Board';
import { useState } from 'react';
import './style.scss';
import { calculateWinner } from './winner';
import StatusMessage from './StatusMessage';
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsXNext] = useState(false);
  const winner = calculateWinner(squares);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((SquareValue, position) => {
        if (clickedPosition === position) {
          return isNext ? 'X' : 'O';
        }
        return SquareValue;
      });
    });
    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <StatusMessage winner ={winner} isNext={isNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
