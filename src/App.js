import { useState } from 'react';

function Square({value,onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>
    {value}
    </button>;
}
export default function Board() {
  // Boolean to determine which player goes next/ flip the value between X and O
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
// if there is a winner or if the square is already filled, return early and ignore the click
    if (squares[i]) {
      return;
    }

    //creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method.
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // update the squares state with the nextSquares array
    setSquares(nextSquares);
    // flip the value of xIsNext
    setXIsNext(!xIsNext);
  }

  return (
    <>
          <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

    </>
  );
  
}
