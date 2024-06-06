import PropTypes from "prop-types";
import { Cell } from ".."
import "./board.css"

function Board({ board, onCellClick }) {
    const columnsClass = `columns-${board.length}`;

    return (
        <section className={`board ${columnsClass}`}>
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
    );
}

Board.propTypes = {
    board: PropTypes.array.isRequired,
    onCellClick: PropTypes.func.isRequired,
};

export default Board;