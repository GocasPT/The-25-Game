import { useState } from "react";
import { Cell } from ".."

function Board() {
    const [board, setBoard] = useState(Array.from({ length: 5 }, () => Array(5).fill(null)));
    const [count, setCount] = useState(1);

    const handleClick = (rowIndex, cellIndex) => {
        const newBoard = board.map((row, rIndex) => 
            row.map((cell, cIndex) => 
                rIndex === rowIndex && cIndex === cellIndex ? count : cell
            )
        );
        newBoard[rowIndex][cellIndex] = count;
        setBoard(newBoard);
        setCount(count + 1);
    }

    return (
        <section>
            {board.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <Cell
                            key={`${rowIndex}-${cellIndex}`}
                            value={cell}
                            onCellClick={() => handleClick(rowIndex, cellIndex)}
                        />
                    ))}
                </div>
            ))}
        </section>
    );
}

export default Board;