import { useEffect, useState } from "react";
import { Header, Footer, Board, GameOverModel } from "./components";

import { createBoard, clearBoard, setNextPossbielMoves } from "./helpers";
import { CELL_VALUE } from "./constants";
import './App.css'

function App() {
  const [size/*, setSize*/] = useState(5);
  const [board, setBoard] = useState([]);
  const [count, setCount] = useState(1);
  const [isGameOver, setGameOver] = useState(false);

    const handleClick = (rowIndex, colIndex) => {
        const newBoard = [...board];

        // Ignore if the cell is is not a possible move
        if (newBoard[rowIndex][colIndex] !== CELL_VALUE.POSSIBLE_MOVE)
            return;

        newBoard[rowIndex][colIndex] = count;
        setCount(count + 1);

        // Check if player win (fill all cells)
        if (count === size * size)
            setGameOver(true);

        clearBoard(newBoard);

        // Check if there is any possible moves (No possible moves => Game Over)
        if (!setNextPossbielMoves(newBoard, rowIndex, colIndex))
            setGameOver(true);

        // Update the board
        setBoard(newBoard);
    }

    const handleRestart = () => {
        const newBoard = createBoard(size, size);
        setBoard(newBoard);
        setCount(1);
        setGameOver(false);
    }

    // Initialize the board
    useEffect(() => {
        const initialBoard = createBoard(size, size);
        setBoard(initialBoard);
    }, [size]);

    // On game over
    /*useEffect(() => {
        if (isGameOver) {
            if (count !== size * size)
                alert("You lost the game!");
            else
                alert("You won the game!");
        }
    }, [isGameOver, count, size]);*/

  return (
    <>
      <Header />
      <Board
        board={board}
        onCellClick={handleClick}
      />
      <GameOverModel
        isGameOver={isGameOver}
        onRestart={handleRestart}
      />
      <Footer />
    </>
  )
}

export default App
