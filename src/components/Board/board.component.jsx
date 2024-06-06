import PropTypes from "prop-types";
import { Cell } from ".."
import "./board.css"

function Board({ board, onCellClick }) {
    return (
        <>
            <section className="board">
                {board.map((row, rowIndex) => (
                    row.map((cell, colIndex) => (
                        <Cell
                        key={`${rowIndex}-${colIndex}`}
                        value={cell}
                        onCellClick={() => onCellClick(rowIndex, colIndex)}
                        />
                    ))
                ))}
            </section>
            {/*isGameOver && 
                <button className="restart" onClick={handleRestart}>
                    Restart
                </button>
            */}
        </>
    );
}

Board.propTypes = {
    board: PropTypes.array.isRequired,
    onCellClick: PropTypes.func.isRequired,
};

export default Board;