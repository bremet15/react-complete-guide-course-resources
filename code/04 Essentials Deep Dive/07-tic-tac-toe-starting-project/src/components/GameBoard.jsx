import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {

    const [gameBoard, setGameBoard  ]= useState(initialGameBoard);

    function handleSelectSquare(rowIndex,columnIndex){
        setGameBoard((prevGameBoard) => {
            //  *****best practice immutiable data update *****
            const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            newGameBoard[rowIndex] [columnIndex] =activePlayerSymbol;
            return newGameBoard;
        });

        onSelectSquare();
    }


  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() =>handleSelectSquare(rowIndex,cellIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
