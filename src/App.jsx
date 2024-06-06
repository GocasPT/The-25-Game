import { useEffect, useState } from "react";
import { Header, Footer, Board, GameOverModel, LevelControl } from "./components";
import { createBoard, clearBoard, setNextPossbielMoves } from "./helpers";
import { CELL_VALUE, LOCAL_STORAGE } from "./constants";
import './App.css'

function App() {
  const [size, setSize] = useState(5);
  const [board, setBoard] = useState([]);
  const [count, setCount] = useState(1);
  const [isGameOver, setGameOver] = useState(false);
  const [isGameControlUnlocked, setGameControlUnlocked] = useState(false);

    const handleClick = (rowIndex, colIndex) => {
        const newBoard = [...board];
        
        // Ignore if the cell is is not a possible move
        if (newBoard[rowIndex][colIndex] !== CELL_VALUE.POSSIBLE_MOVE) {
          return;
        }

        newBoard[rowIndex][colIndex] = count;
        setCount(count + 1);

        // Check if player win (fill all cells)
        if (count === size * size) {
          setGameOver(true);
          setGameControlUnlocked(true);
          localStorage.setItem(LOCAL_STORAGE.LEVEL_SELECT, true);
        }

        clearBoard(newBoard);

        // Check if there is any possible moves (No possible moves => Game Over)
        if (!setNextPossbielMoves(newBoard, rowIndex, colIndex)) {
          setGameOver(true);
        }

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

        const isLevelSelectUnlock = localStorage.getItem(LOCAL_STORAGE.LEVEL_SELECT);
        if (isLevelSelectUnlock) {
          setGameControlUnlocked(true);
        }
    }, [size]);

  return (
    <>
      <Header />
      {isGameControlUnlocked && (
        <LevelControl
          onLevelChange={setSize}
        />
      )}
      <Board
        board={board}
        onCellClick={handleClick}
      />
      <GameOverModel
        isGameOver={isGameOver}
        fillCells={count - 1}
        maxCells={size * size}
        onRestart={handleRestart}
      />
      <Footer />
    </>
  )
}

export default App
